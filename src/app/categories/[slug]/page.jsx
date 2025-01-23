const page = ({ params }) => {
  //   console.log(params);

  return <div className="min-h-dvh">{params?.slug}</div>;
};
export default page;
