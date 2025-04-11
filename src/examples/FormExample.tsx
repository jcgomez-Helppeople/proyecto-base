import { useState } from "react";
import { CustomInputText } from "../components/Inputs/InputText";
import { CustomButton } from "../components/CustomButton";
import "./FormExample.styles.css";

interface FormData {
  clientId: string;
  tenantId: string;
  clientSecret: string;
  domain: string;
}

const FormExample = () => {
  const [formData, setFormData] = useState<FormData>({
    clientId: "",
    tenantId: "",
    clientSecret: "",
    domain: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="form-example">
      <div className="form-example__container">
        <form onSubmit={handleSubmit} className="form-example__form">
          <div className="form-example__field">
            <label htmlFor="clientId">Client Id *</label>
            <CustomInputText
              id="clientId"
              name="clientId"
              value={formData.clientId}
              onChange={handleInputChange}
              placeholder="Ingrese el Client Id"
              fullWidth
            />
          </div>

          <div className="form-example__field">
            <label htmlFor="tenantId">Tenant Id *</label>
            <CustomInputText
              id="tenantId"
              name="tenantId"
              value={formData.tenantId}
              onChange={handleInputChange}
              placeholder="Ingrese el Tenant Id"
              fullWidth
            />
          </div>

          <div className="form-example__field">
            <label htmlFor="clientSecret">Client Secret *</label>
            <CustomInputText
              id="clientSecret"
              name="clientSecret"
              value={formData.clientSecret}
              onChange={handleInputChange}
              placeholder="Ingrese el Client Secret"
              fullWidth
            />
          </div>

          <div className="form-example__field">
            <label htmlFor="domain">Dominio *</label>
            <CustomInputText
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              placeholder="Ingrese el Dominio"
              fullWidth
            />
          </div>

          <div className="form-example__actions">
            <CustomButton
              label="Guardar"
              variant="primary"
              type="submit"
              fullWidth
            />
            <CustomButton
              label="Volver"
              variant="secondary"
              type="button"
              onClick={() => console.log("Volver")}
              fullWidth
            />
          </div>
        </form>

        <aside className="form-example__aside">
          <h2>¿Qué es Azure?</h2>
          <p>
            La plataforma en la nube de Azure cuenta con más de 200 productos y
            servicios en la nube diseñados para ayudarle a dar vida a nuevas
            soluciones, para resolver los desafíos actuales y crear el futuro.
            Cree, ejecute y administre aplicaciones en múltiples nubes, en las
            instalaciones y en el perímetro, con las herramientas y los marcos
            de su elección.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default FormExample;
