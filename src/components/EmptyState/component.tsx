import type React from "react"
import { Empty, Typography } from "antd"

export interface EmptyStateProps {
  text: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ text }) => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <Typography.Text>
          {text}
        </Typography.Text>
      }
    />
  )
}

export default EmptyState
