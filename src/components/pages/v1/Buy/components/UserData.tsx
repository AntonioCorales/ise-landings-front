import CountrySelect from "@/components/pages/commun/Inputs/CountrySelect";
import Input from "@/components/pages/commun/Inputs/Input";

export default function UserData(props: UserDataProps) {
  return (
    <div className="flex flex-col gap-2">
      <Input
        label="Nombres"
        type="text"
        name="name"
        id="name"
        placeholder="Ingrese nombre"
        autoComplete="off"
      />
      <Input
        label="Apellidos"
        type="text"
        name="last-name"
        id="last-name"
        placeholder="Ingrese apellidos"
        autoComplete="off"
      />
      <Input
        label="Correo electrónico"
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        autoComplete="off"
      />
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
        <CountrySelect
          defaultValue={["PER"]}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Input
          label="Celular"
          type="text"
          name="cell-phone"
          id="cell-phone"
          placeholder="999-999-999"
          autoComplete="off"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
        />
      </div>
      <Input
        label="Documento de Identidad"
        type="text"
        name="document-id"
        id="document-id"
        placeholder="Ingrese documento de identidad"
        autoComplete="off"
      />
      <button
        className="
  bg-[--sky-2] text-white text-sm font-semibold py-2 px-4 rounded-lg mt-2
  hover:bg-[--sky-1] hover:text-white transition-all hover:scale-105 "
        onClick={() => {
          props.onClick?.();
        }}
      >
        Siguiente
      </button>
    </div>
  );
}

interface UserDataProps {
  onClick?: () => void;
}
