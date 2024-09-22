import Image from "next/image";

type Props = {
  partners: Partner[];
};

export const Partners = ({ partners }: Props) => {
  return (
    <div className="flex justify-between">
      {partners.map((partner) => (
        <Image
          key={partner.id}
          width={106}
          height={80}
          src={partner.image}
          alt={partner.name}
        />
      ))}
    </div>
  );
};
