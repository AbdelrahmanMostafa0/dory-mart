import FavorietsPage from "@/components/favoriets/FavorietsPage";
import PageWrapper from "@/components/PageWrapper";
import PageContainer from "@/components/ui/PageContainer";

const page = () => {
  return (
    <PageWrapper>
      <PageContainer className={"space-y-6"}>
        <FavorietsPage />
      </PageContainer>
    </PageWrapper>
  );
};

export default page;
