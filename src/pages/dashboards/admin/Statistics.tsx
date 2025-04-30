
import DashboardLayout from '@/components/DashboardLayout';

const AdminStatistics = () => {
  return (
    <DashboardLayout title="Statistik Administrator" activeLink="statistik">
      <div className="space-y-6">
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold mb-4">Data Administrator</h2>
          <p className="text-gray-300">
            Dashboard Administrator memuat statistik dan data seluruh Kabupaten Lamongan yang dapat dikelola oleh admin.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminStatistics;
