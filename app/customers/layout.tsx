import MainLayout from '@/layouts/main'

const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  })=>{

    return(
        <MainLayout>{children}</MainLayout>
    )
}

export default DashboardLayout