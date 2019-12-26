import React from 'react';

import * as s from './App.styled'

enum Stage {
  DefineList,
  SortList,
  ViewList
}


const App: React.FC = () => {
  const [currentStage, setCurrentStage] = React.useState(Stage.DefineList)
  const [list, setList] = React.useState<string[]>([])
  const [nextListItem, setNextListItem] = React.useState('')

  const [listIteration, setListIteration] = React.useState(0)
  const [subIteration, setSubIteration] = React.useState(0)

  const addToList = (newItem: string) => {
    setList(list => {
      list.push(newItem)
      return list
    })
  }

  const switchListItems = (indexA: number, indexB: number) => {
    setList(list => {
      const tmp = list[indexA]
      list[indexA] = list[indexB]
      list[indexB] = tmp
      return list
    })
  }

  const continueSort = () => {
    setSubIteration(subIteration + 1)

    if (subIteration >= list.length - listIteration - 2) {
      setSubIteration(0)
      setListIteration(listIteration + 1)

      if (listIteration >= list.length - 1) {
        setListIteration(0)
        setCurrentStage(Stage.ViewList)
      }
    }
  }

  const renderList = () => {
    return list.map(item =>
      <s.ListItem>
        {item}
      </s.ListItem>
    )
  }

  return (
    <s.App>
      <s.Header>
        <s.Title>Bubbler</s.Title>
      </s.Header>

      <s.Body>
        <s.List>
          {renderList()}
        </s.List>

        <s.Content>
          {
            currentStage === Stage.DefineList && (
              <>
                <s.InputField
                  value={nextListItem}
                  onChange={e => { setNextListItem(e.target.value) }}
                  placeholder={'Give me something to work with!'}
                />
                <s.Button
                  disabled={nextListItem.length < 1}
                  onClick={() => {
                    addToList(nextListItem)
                    setNextListItem('')
                  }}
                >
                  Add
                </s.Button>
                <s.Button
                  disabled={list.length < 2}
                  onClick={() => { setCurrentStage(Stage.SortList) }}
                >
                  Start Sorting
                </s.Button>
              </>
            )
          }


          {
            currentStage === Stage.SortList && (
              <>
                <p>Which do you like <b>more</b></p>

                <s.Button
                  onClick={() => {
                    continueSort()
                  }}
                >
                  {list[subIteration]}
                </s.Button>

                <s.Button
                  onClick={() => {
                    switchListItems(subIteration, subIteration + 1)
                    continueSort()
                  }}
                >
                  {list[subIteration + 1]}
                </s.Button>
              </>
            )
          }

          {
            currentStage === Stage.ViewList && (
              <>
                <p> This is your list :) </p>

              <s.Button
                onClick={() => { setCurrentStage(Stage.DefineList) }}
              >
                Sort Again
              </s.Button>
              </>
            )
          }

        </s.Content>
      </s.Body>
    </s.App>
  )
}

export default App
