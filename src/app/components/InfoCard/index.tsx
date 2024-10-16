interface InfoCardProps {
  title: string;
  desc: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, desc }) => {
  return (
    <div className="card bg-transparent w-full shadow-xl border-b rounded-none">
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
