
import ProductList from "@/app/components/ProductList";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
	const category = (await searchParams).category;
  return <div>
	<ProductList category={category} params="products"/>
  </div>;
}
