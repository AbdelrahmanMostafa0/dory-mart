import { getAllProducts } from "@/apis/productsApis";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

const NewstProducts = async () => {
  const data = await getAllProducts({ limit: 12 });

  return (
    <div className="container mx-auto space-y-8 py-10 ">
      <h1 className="text-5xl md:text-7xl font-bold font-zentry sm:text-start">
        New arrivals
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data?.products?.map((product) => (
          //   <div key={product.id} className="w-full">
          //     {product.title}
          //     {/* <ProductCard product={product} /> */}
          //   </div>
          <Card key={product.id}>
            <CardHeader>
              <Image
                width={1000}
                height={1000}
                alt={product.title}
                src={product.thumbnail}
                className="w-full h-[300px] mb-2 rounded-lg object-cover sm:object-fill"
              />
              <CardTitle className="mt-2 line-clamp-1">
                {product.title}
              </CardTitle>
              <CardDescription className={"line-clamp-2"}>
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>${product.price}</p>
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
};
export default NewstProducts;
