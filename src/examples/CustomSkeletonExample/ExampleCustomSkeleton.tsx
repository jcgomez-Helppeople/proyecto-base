import { useState, useEffect } from "react";
import CustomSkeleton from "../../components/CustomSkeleton/CustomSkeleton";

const ExampleCustomSkeleton = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData("Este es el contenido cargado.");
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomSkeleton</h1>

      {loading ? (
        <CustomSkeleton loadingText="Cargando contenido..." active paragraph={{ rows: 3 }} />
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default ExampleCustomSkeleton;