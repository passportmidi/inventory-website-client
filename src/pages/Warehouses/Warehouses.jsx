import axios from "axios";
import { useEffect, useState } from "react";
import deleteLogo from "../../assets/icons/delete_outline-24px.svg";
import editLogo from "../../assets/icons/edit-24px.svg";
import "./Warehouses.scss";

const baseURL = import.meta.env.VITE_API_URL;

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    fetchWarehouses();
  }, []);

  async function fetchWarehouses() {
    try {
      const { data } = await axios.get(`${baseURL}/api/warehouses`);
      setWarehouses(data);
    } catch (e) {
      console.log("Error fetching warehouses:", e);
    }
  }

  if (!warehouses) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>Warehouses</h1>
      <div className="warehouse__grid">
        {warehouses.map((warehouse) => {
          return (
            <div className="warehouse__row" key={warehouse.id}>
              <div className="warehouse__name">{warehouse.warehouse_name}</div>
              <div className="warehouse__address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
              <div className="warehouse__contact">{warehouse.contact_name}</div>
              <div className="warehouse__contact-info">
                <div className="warehouse__phone">{warehouse.contact_phone}</div>
                <div className="warehouse__email">{warehouse.contact_email}</div>
              </div>
              <div className="warehouse__actions">
                <img src={deleteLogo} alt="Delete" />
                <img src={editLogo} alt="Edit" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
