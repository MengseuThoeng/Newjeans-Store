"use client";
import * as React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Footer from "@/components/footer/Footer";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_value, row) => `${row.firstName || ""} ${row.lastName || ""}`
  }
];

const rows = [
  { id: 1, lastName: "កូន", firstName: "កែវ", age: 35 },
  { id: 2, lastName: "ឡានីស្តេរ", firstName: "សេរី", age: 42 },
  { id: 3, lastName: "ឡានីស្តេរ", firstName: "ហ៊ាហ្សាេអ៊ី", age: 45 },
  { id: 4, lastName: "ស្តាក", firstName: "អារី", age: 16 },
  { id: 5, lastName: "តាំការៀន", firstName: "ដានាអាតេនី", age: null },
  { id: 6, lastName: "មេលីសានឌ្រ", firstName: null, age: 150 },
  { id: 7, lastName: "ក្លិចហ៊ុលហ្រោស", firstName: "ហ៊ារ៉ាវ", age: 44 },
  { id: 8, lastName: "ហ្រីន្រា", firstName: "រស្សីនី", age: 36 },
  { id: 9, lastName: "រូហ្វី", firstName: "ហារ៉វ៉ាេយ", age: 65 }
];


const Shop = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);
  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="container mx-auto grid gap-3">
      
      <div className="w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div>
        <Link href="/createProduct" className="bg-black text-white py-3 px-2">
          Create Product
        </Link>
      </div>
    </div>
  );
};

export default Shop;
