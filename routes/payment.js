import mercadopago from 'mercadopago'
import express from 'express'
import cors from "cors";

let router = express.Router();

//mercadopago
mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})
router.post("/",cors(), (req, res) => {
  const boton = req.body
  console.log(req.body)
    let preference = {
      items: [
        {
          id: 123,
          title: boton.title,
          currency_id: "ARS",
          unit_price: boton.price,
          picture_url: boton.image_pay,
          quantity: 1,
        },
      ],
      back_urls: {
        success: "http://localhost:3000/",
        failure: "",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
    };
    mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).json({ response }))
      .catch((error) => res.status(400).json({ error: error.message }));
  });
  
  export default router;