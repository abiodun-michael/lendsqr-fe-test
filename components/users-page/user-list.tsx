import Card from "../card"
import Popup from "../popup"
import Status from "../status/Index"
import { THead, Table, Th } from "../table"
import TBody from "../table/TBody"
import TData from "../table/TData"
import TRow from "../table/TRow"
import { DateJoinedFilter, EmailFilter, OrganizationFilter, PhoneNumberFilter, StatusFilter, UsernameFilter } from "./filter"
import TablePopup from "./table-popup"


const UserList = ()=>{

    return(
        <Card sx={{padding:'30px', marginTop:40}}>
            <Table>
                <THead>
                    <Th
                        renderFilter={<OrganizationFilter />}>organization</Th>
                    <Th
                        renderFilter={<UsernameFilter />}>Username</Th>
                    <Th
                        renderFilter={<EmailFilter />}>Email</Th>
                    <Th
                        renderFilter={<PhoneNumberFilter />}>Phone number</Th>
                    <Th
                        renderFilter={<DateJoinedFilter />}>Date joined</Th>
                    <Th
                        renderFilter={<StatusFilter />}>Status</Th>
                        <Th sx={{flex:0.2}}></Th>
                </THead>
                <TBody>
                    <TRow>
                        <TData>Lendsqr</TData>
                        <TData>Adedeji</TData>
                        <TData>adedeji@lendsqr.com</TData>
                        <TData>08078903721</TData>
                        <TData>May 15, 2020 10:00 AM</TData>
                        <TData><Status label="Blacklisted" type="blacklisted"/></TData>
                        <TData sx={{ flex:0.2}}><TablePopup id="1" status="inactive"/></TData>
                    </TRow>
                    <TRow>
                        <TData>Lendsqr</TData>
                        <TData>Adedeji</TData>
                        <TData>adedeji@lendsqr.com</TData>
                        <TData>08078903721</TData>
                        <TData>May 15, 2020 10:00 AM</TData>
                        <TData><Status label="Active" type="active"/></TData>
                        <TData sx={{ flex:0.2}}><TablePopup id="2" status="active"/></TData>
                    </TRow>
                    <TRow>
                        <TData>Lendsqr</TData>
                        <TData>Adedeji</TData>
                        <TData>adedeji@lendsqr.com</TData>
                        <TData>08078903721</TData>
                        <TData>May 15, 2020 10:00 AM</TData>
                        <TData>Blacklisted</TData>
                    </TRow>
                    <TRow>
                        <TData>Lendsqr</TData>
                        <TData>Adedeji</TData>
                        <TData>adedeji@lendsqr.com</TData>
                        <TData>08078903721</TData>
                        <TData>May 15, 2020 10:00 AM</TData>
                        <TData>Blacklisted</TData>
                    </TRow>
                    <TRow>
                        <TData>Lendsqr</TData>
                        <TData>Adedeji</TData>
                        <TData>adedeji@lendsqr.com</TData>
                        <TData>08078903721</TData>
                        <TData>May 15, 2020 10:00 AM</TData>
                        <TData>Blacklisted</TData>
                    </TRow>
                </TBody>
            </Table>
        </Card>
    )
}

export default UserList