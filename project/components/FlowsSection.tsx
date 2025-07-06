'use client';

import { useState, useEffect } from 'react';
import { Droplets, Clock, CheckCircle, AlertCircle, Loader2, MapPin } from 'lucide-react';

interface Donation {
  id: string;
  donor_name: string;
  blood_type: string;
  status: 'collected' | 'processing' | 'available' | 'used';
  collection_date: string;
  expiry_date: string;
  location: string;
  volume: number;
}

const FlowsSection = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://redflow-api.example.com/api/donations', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch donations');
      }
      
      const data = await response.json();
      setDonations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback demo data
      setDonations([
        {
          id: '1',
          donor_name: 'Maria Silva',
          blood_type: 'O+',
          status: 'available',
          collection_date: '2024-01-18T09:30:00Z',
          expiry_date: '2024-02-18T09:30:00Z',
          location: 'Hospital São Paulo',
          volume: 450
        },
        {
          id: '2',
          donor_name: 'João Santos',
          blood_type: 'A-',
          status: 'processing',
          collection_date: '2024-01-20T14:15:00Z',
          expiry_date: '2024-02-20T14:15:00Z',
          location: 'Centro de Hemoterapia',
          volume: 450
        },
        {
          id: '3',
          donor_name: 'Ana Costa',
          blood_type: 'B+',
          status: 'collected',
          collection_date: '2024-01-20T16:45:00Z',
          expiry_date: '2024-02-20T16:45:00Z',
          location: 'Hospital das Clínicas',
          volume: 450
        },
        {
          id: '4',
          donor_name: 'Carlos Oliveira',
          blood_type: 'AB+',
          status: 'used',
          collection_date: '2024-01-15T11:20:00Z',
          expiry_date: '2024-02-15T11:20:00Z',
          location: 'Hospital Municipal',
          volume: 450
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Loader2 className="w-5 h-5 text-yellow-600 animate-spin" />;
      case 'available':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'used':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'used':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-orange-100 text-orange-800';
    }
  };

  const getBloodTypeColor = (bloodType: string) => {
    const colors = {
      'O+': 'bg-red-500',
      'O-': 'bg-red-600',
      'A+': 'bg-rose-500',
      'A-': 'bg-rose-600',
      'B+': 'bg-pink-500',
      'B-': 'bg-pink-600',
      'AB+': 'bg-purple-500',
      'AB-': 'bg-purple-600'
    };
    return colors[bloodType as keyof typeof colors] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      'collected': 'Coletado',
      'processing': 'Processando',
      'available': 'Disponível',
      'used': 'Utilizado'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  return (
    <section id="flows" className="py-20 bg-gradient-to-br from-red-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Doações Ativas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe em tempo real o status das doações de sangue. 
            Cada bolsa representa uma oportunidade de salvar vidas através da sua generosidade.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Não foi possível carregar as doações</h3>
            <p className="text-gray-600 mb-4">Exibindo dados de demonstração</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donations.map((donation, index) => (
            <div
              key={donation.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-red-100"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${getBloodTypeColor(donation.blood_type)} rounded-lg flex items-center justify-center`}>
                      <Droplets className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{donation.donor_name}</h3>
                      <p className="text-sm font-bold text-red-600">{donation.blood_type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(donation.status)}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(donation.status)}`}>
                      {getStatusText(donation.status)}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{donation.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Volume</span>
                    <span className="text-gray-900 font-medium">{donation.volume}ml</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Coletado em</span>
                    <span className="text-gray-900 font-medium">{formatDate(donation.collection_date)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Validade</span>
                    <span className="text-gray-900 font-medium">{formatDate(donation.expiry_date)}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-rose-50 border-t border-red-100">
                <button className="w-full text-red-600 hover:text-red-700 font-medium text-sm flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform">
                  <span>Ver Detalhes</span>
                  <Droplets className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blood Type Legend */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tipos Sanguíneos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((type) => (
              <div key={type} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`w-8 h-8 ${getBloodTypeColor(type)} rounded-lg flex items-center justify-center`}>
                  <Droplets className="w-4 h-4 text-white fill-current" />
                </div>
                <span className="font-semibold text-gray-900">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowsSection;