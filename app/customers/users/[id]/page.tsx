import UserDetailsPage from "@/components/user-details-page/Index"
import { PageContainer } from "@/layouts/main"





const UserDetailPage = ()=>{

    return(
        <PageContainer title="Back to Users" isSubPage>
            <UserDetailsPage />
        </PageContainer>
    )
}

export default UserDetailPage