import { OrganizationList } from "@clerk/nextjs";

export default function OrganizationIdPage() {
    return (
        <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/organization/:id"
        afterSelectOrganizationUrl="/organization/:id"
        />
    );
};