import React, { StrictMode } from "react"
import { ConfigProvider } from "antd"
import TodoListWrapper from "@modules/TodoListWrapper/component"
import ContextProvider from '@app/providers/context/ContextProvider'
import { themeBase } from "@theme/theme"
import RootModal from "@modules/RootModal/component"

const App: React.FC = () => {
  return (
    <StrictMode>
      <ConfigProvider theme={themeBase}>
        <ContextProvider>
          <RootModal/>
          <TodoListWrapper />
        </ContextProvider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
