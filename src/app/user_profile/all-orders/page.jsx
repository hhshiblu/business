"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

// import { deleteProduct, getAllShopProduct } from "../../Redux/Action/product";

import Link from "next/link";
import { getAllShopProductAsync } from "@/redux/reducer/productSlice";
import SellerLoader from "@/components/Loader/SellerLOader";

// import Loader from "../Layout/Loader";

const AllProducts = () => {
  const { sellerProduct, isloading, success } = useSelector(
    (state) => state.product
  );
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 6,
    page: 0,
  });
  // const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();
  const id = "6461e1231d468f007eb5d6d9";
  useEffect(() => {
    dispatch(getAllShopProductAsync(id));
  }, [dispatch, id]);

  // const handleDelete = (id) => {
  //   dispatch(deleteProduct(id));
  //   window.location.reload();
  // };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link href={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  sellerProduct &&
    sellerProduct.forEach((item) => {
      row.push({
        id: item.id, // Use _id as the unique identifier
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      {isloading ? (
        <SellerLoader />
      ) : (
        <div className=" h-[91vh] overflow-y-scroll overflow-hidden w-full md:px-6 px-1 pt-3  bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
