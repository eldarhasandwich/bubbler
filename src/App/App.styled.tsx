import styled from 'styled-components'

const HEADER_HEIGHT = 50;
const LIST_WIDTH = 400;

export const App = styled.div`
  /* text-align: center; */
  background-image: linear-gradient(to bottom right, #c31432 , #240b36);
  /* min-height: 100vh; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  font-size: calc(10px + 2vmin);
  color: white;

  /* position: absolute; */

  min-width: 600px;
`

export const Header = styled.header`

  height: ${HEADER_HEIGHT}px;
  width: 100vw;
`

export const Title = styled.h1`
  margin: 0;
  margin-left: 30px;
`

export const Body = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  width: 100vw;

  padding-top: 30px;
  overflow: hidden;
`

export const List = styled.div`
  width: ${LIST_WIDTH}px;
  height: 100%;
  float: left;

  margin-left: 20px;
  margin-right: 20px;

`

export const ListItem = styled.div`
  padding: 5px;

  margin-top: 10px;

  border: 1px solid rgba(255,255,255, 0.05);
  border-radius: 5px;
`

export const Content = styled.div`
  width: calc(100vw - ${LIST_WIDTH}px - 80px);

  height: 100%;
  float: left;

  margin-left: 20px;
  margin-right: 20px;

`

export const Button = styled.button`
  width: calc(100%);
  height: 30px;
  
  font-size: 20px;
  color: white;

  background: rgba(255,255,255, 0.1);
  border: 1px solid white;
  cursor: pointer;

  :disabled{
    color: grey;
    background: none;
    border: 1px solid rgba(255,255,255, 0.1);
    
    cursor: auto;
  }
`

export const InputField = styled.input`
  width: calc(100%);

  height: 60px;
  background: none;
  color: white;
  font-size: 30px;
  padding-left: 10px;

  border: none;
  border-bottom: 1px solid white;
`