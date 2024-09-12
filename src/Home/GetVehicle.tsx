import axios from "axios";
import { useEffect, useState } from "react";
import { Vehicle } from "../Home/Type";

const GetVehicle = () => {
  const [vehicle, setVehicle] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(
          "https://669997d32069c438cd72aa24.mockapi.io/api/advisor/AutomotiveMarketplace"
        );

        setVehicle(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicle();
  }, []);

  return (
    <div>
      <h2>Avaliable Vechilces</h2>

      <ul>
        {vehicle.map((car) => (
          <li key={car.id}>
            <h3>
              {car.make} {car.model} {car.year}
            </h3>
            <p>{car.price}</p>
            <p>{car.mileage}</p>
            <p>{car.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetVehicle;
