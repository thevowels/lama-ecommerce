import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { getToken } = await auth();
  const token = await getToken();

  console.log(token);
  const Product = await fetch("http://localhost:8000/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  const Order = await fetch("http://localhost:8001/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  const Payment = await fetch("http://localhost:8002/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  console.log(Product);
  console.log(Order);
  console.log(Payment);
  return <div>Test Page</div>;
}
