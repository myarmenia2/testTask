import React, { useState } from "react";
import { cutDescription } from "../../utils/cutString";
import { Box, Modal, Typography } from "@mui/material";

import "./ProductItem.css";
import { boxStyles } from "../../constants/modalStyles";
import { ProductItemI } from "../../models/products";

export const ProductItem: React.FC<ProductItemI> = ({
  id,
  hours,
  description,
  logo,
  review,
  name,
  type,
}) => {
  const [modalShow, setModalShow] = useState(false);

  const showHours = () => {
    let today = new Date();

    const resultLayout = (
      opens_at: string,
      closes_at: string,
      status: string
    ) => (
      <>
        opens_at: {opens_at}
        <br />
        closes_at: {closes_at}
        <br />
        We are {status}
      </>
    );

    switch (today.getDay()) {
      case 1:
        return resultLayout(
          hours.monday.opens_at,
          hours.monday.closes_at,
          hours.monday.is_closed ? "open now" : "closed, sorry"
        );
      case 2:
        return resultLayout(
          hours.tuesday.opens_at,
          hours.tuesday.closes_at,
          hours.tuesday.is_closed ? "open now" : "closed, sorry"
        );
      case 3:
        return resultLayout(
          hours.wednesday.opens_at,
          hours.wednesday.closes_at,
          hours.wednesday.is_closed ? "open now" : "closed, sorry"
        );
      case 4:
        return resultLayout(
          hours.thursday.opens_at,
          hours.thursday.closes_at,
          hours.thursday.is_closed ? "open now" : "closed, sorry"
        );
      case 5:
        return resultLayout(
          hours.friday.opens_at,
          hours.friday.closes_at,
          hours.friday.is_closed ? "open now" : "closed, sorry"
        );
      case 6:
        return resultLayout(
          hours.saturday.opens_at,
          hours.saturday.closes_at,
          hours.saturday.is_closed ? "open now" : "closed, sorry"
        );
      case 7:
        return resultLayout(
          hours.sunday.opens_at,
          hours.sunday.closes_at,
          hours.sunday.is_closed ? "open now" : "closed, sorry"
        );
    }
  };

  return (
    <div className={"products-container"}>
      <div className={"product-block"} onClick={() => setModalShow(true)}>
        <h4 className={"product-block-h4"}>{id}</h4>
        <img className={"product-block-img"} src={logo} alt={name} />
        <h3 className={"product-block-h3"}>{name}</h3>
        <h3 className={"product-block-h3"}>{type}</h3>
        <h4 className={"product-block-h4"}>
          {cutDescription(description, 137)}
        </h4>
      </div>
      <Modal open={modalShow} onClose={() => setModalShow(false)}>
        <Box sx={boxStyles}>
          <img src={logo} alt={name} width={200} />
          <Typography>
            <span>{review}</span>
          </Typography>
          <Typography>{showHours()}</Typography>
        </Box>
      </Modal>
    </div>
  );
};
