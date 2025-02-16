import PageContainer from "@/components/ui/PageContainer";

const page = async ({ searchParams }) => {
  const queries = await searchParams;

  console.log(queries);

  return <PageContainer>page</PageContainer>;
};
export default page;
