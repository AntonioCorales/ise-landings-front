import { Download } from "@/components/icons";
import { CardMembershipOutlined, PendingActionsOutlined, ScheduleOutlined, SyncOutlined } from "@mui/icons-material";

export default function BenefitsList() {
  return (
    <ul className="list-none benefits-list flex flex-col gap-2">
      <BenefitsItem> <PendingActionsOutlined /> Aprende a tu ritmo </BenefitsItem>
      <BenefitsItem> <ScheduleOutlined /> Acceso ilimitado por 1 año </BenefitsItem>
      <BenefitsItem><SyncOutlined /> Cursos actualizados </BenefitsItem>
      <BenefitsItem><Download /> Bonos descargables</BenefitsItem>
      <BenefitsItem>
        <CardMembershipOutlined /> Certificado por cada curso
      </BenefitsItem>
    </ul>
  );
}

function BenefitsItem(props: React.HTMLAttributes<HTMLLIElement>) {
  return <li className="flex flex-row gap-2" {...props}></li>;
}
