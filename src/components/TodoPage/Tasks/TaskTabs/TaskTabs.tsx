import { Tabs, Tab, Typography } from '@mui/material'

interface TaskTabsProps {
  activeTab: number
  taskCounts: {
    current: number
    all: number
    completed: number
    trashed: number
  }
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void
  styles: any
}

const TaskTabs: React.FC<TaskTabsProps> = ({
  activeTab,
  taskCounts,
  onChange,
  styles
}) => {
  const tabs = [
    { label: 'ТЕКУЩИЕ ДЕЛА', count: taskCounts.current },
    { label: 'ВСЕ ДЕЛА', count: taskCounts.all },
    { label: 'ВЫПОЛНЕННЫЕ ДЕЛА', count: taskCounts.completed },
    { label: 'КОРЗИНА', count: taskCounts.trashed }
  ]

  return (
    <Tabs value={activeTab} onChange={onChange} sx={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={
            <>
              <Typography variant="body1">{tab.label}</Typography>
              {tab.count > 0 && (
                <Typography variant="body1" sx={{ marginLeft: 1 }}>
                  ({tab.count})
                </Typography>
              )}
            </>
          }
          sx={styles.tab}
        />
      ))}
    </Tabs>
  )
}

export default TaskTabs
