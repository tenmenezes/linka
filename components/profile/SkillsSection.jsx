import InfoCard from "./InfoCard";
import InfoRow from "./InfoRow";

export default function SkillsSection({ user }) {
  return (
    <InfoCard
      title="Habilidades"
      icon="star-outline"
      onEdit={() => {}}
    >
      <InfoRow
        label="Áreas de foco"
        value={user.field}
      />

      <InfoRow
        label="Ferramentas"
        value={user.tools}
      />

      <InfoRow
        label="Idiomas"
        value={user.languages}
      />

      <InfoRow
        label="Habilidades"
        value={user.skills}
        isLast
      />
    </InfoCard>
  );
}