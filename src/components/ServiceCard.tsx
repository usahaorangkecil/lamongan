import { Link } from 'react-router-dom';


type Option = {
  label: string;
  value: string;
  path: string;
};

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  options?: Option[];
  path?: string;
  description?: string; // optional for summary
}

const ServiceCard = ({ title, icon, options, path, description }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between h-full bg-gradient-to-br from-green-50 to-white">
      <div>
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        )}
        {options ? (
          <ul className="mt-2 space-y-1">
            {options.map((option) => (
              <li key={option.value}>
                <Link
                  href={option.path}
                  className="text-sm text-green-700 hover:underline"
                >
                  • {option.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : path ? (
          <Link
            href={path}
            className="inline-block mt-3 text-sm text-green-700 font-medium hover:underline"
          >
            Lihat Detail &rarr;
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceCard;

