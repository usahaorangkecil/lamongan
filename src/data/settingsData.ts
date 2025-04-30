
export interface TemaConfig {
  id: string;
  nama: string;
  mode: 'dark' | 'light';
  primaryColor: string;
}

export const temaConfigs: TemaConfig[] = [
  { id: "1", nama: "Default Dark Theme", mode: "dark", primaryColor: "#4CAF50" },
  { id: "2", nama: "Light Theme", mode: "light", primaryColor: "#4CAF50" },
  { id: "3", nama: "Blue Dark Theme", mode: "dark", primaryColor: "#2196F3" },
  { id: "4", nama: "Blue Light Theme", mode: "light", primaryColor: "#2196F3" },
  { id: "5", nama: "Orange Dark Theme", mode: "dark", primaryColor: "#FF9800" }
];

export interface UserRole {
  id: string;
  name: string;
  permissions: string[];
}

export const userRoles: UserRole[] = [
  { 
    id: "bupati", 
    name: "Bupati", 
    permissions: [
      "view_all_data", 
      "edit_all_data", 
      "approve_changes", 
      "manage_users", 
      "view_recommendations"
    ]
  },
  { 
    id: "opd", 
    name: "OPD (Dinas)", 
    permissions: [
      "view_department_data", 
      "edit_department_data", 
      "view_reports"
    ]
  },
  { 
    id: "camat", 
    name: "Camat", 
    permissions: [
      "view_subdistrict_data", 
      "edit_subdistrict_data", 
      "submit_reports"
    ]
  },
  { 
    id: "admin", 
    name: "Administrator", 
    permissions: [
      "view_all_data", 
      "edit_all_data", 
      "manage_users", 
      "system_settings"
    ]
  }
];

export interface NotificationType {
  id: string;
  name: string;
  description: string;
  isEnabled: boolean;
}

export const notificationTypes: NotificationType[] = [
  { 
    id: "data_update", 
    name: "Pembaruan Data", 
    description: "Notifikasi ketika ada pembaruan data penting", 
    isEnabled: true 
  },
  { 
    id: "kemiskinan_alert", 
    name: "Peringatan Kemiskinan", 
    description: "Notifikasi ketika tingkat kemiskinan di suatu daerah meningkat", 
    isEnabled: true 
  },
  { 
    id: "kesehatan_alert", 
    name: "Peringatan Kesehatan", 
    description: "Notifikasi tentang kasus kesehatan dan penyakit", 
    isEnabled: true 
  },
  { 
    id: "pengangguran_alert", 
    name: "Peringatan Pengangguran", 
    description: "Notifikasi ketika angka pengangguran di suatu daerah meningkat", 
    isEnabled: false 
  },
  { 
    id: "infrastruktur_update", 
    name: "Update Infrastruktur", 
    description: "Notifikasi tentang status proyek infrastruktur", 
    isEnabled: true 
  }
];

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

export const settingsData = {
  users: [
    { id: "1", name: "Dr. Ahmad", email: "ahmad@dinkes.lamongan.go.id", role: "admin", status: 'active', lastLogin: "2023-04-01" },
    { id: "2", name: "Budi Santoso", email: "budi@dinkes.lamongan.go.id", role: "editor", status: 'active', lastLogin: "2023-04-02" },
    { id: "3", name: "Citra Dewi", email: "citra@dinkes.lamongan.go.id", role: "viewer", status: 'active', lastLogin: "2023-04-01" },
    { id: "4", name: "Deni Kurniawan", email: "deni@dinkes.lamongan.go.id", role: "viewer", status: 'inactive', lastLogin: "2023-03-15" }
  ] as User[],
  
  themePreference: "dark",
  
  notifications: {
    newData: true,
    updates: true,
    alerts: true,
    newsletter: false
  }
};
