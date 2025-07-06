'use client';

import { useState, useEffect } from 'react';
import { Heart, TrendingUp, Users, Activity, Loader2, AlertCircle, Droplets } from 'lucide-react';

interface BloodBankStats {
  totalDonations: number;
  activeDonors: number;
  livesImpacted: number;
  bloodUnitsAvailable: number;
  donationsThisMonth: string;
  emergencyRequests: string;
  avgResponseTime: string;
  donorRetentionRate: string;
}

const StatsSection = () => {
  const [stats, setStats] = useState<BloodBankStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://redflow-api.example.com/api/stats', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      
      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback demo data
      setStats({
        totalDonations: 12847,
        activeDonors: 3421,
        livesImpacted: 38541,
        bloodUnitsAvailable: 1250,
        donationsThisMonth: '+18%',
        emergencyRequests: '24h',
        avgResponseTime: '45min',
        donorRetentionRate: '87%'
      });
    } finally {
      setLoading(false);
    }
  };

  const statsData = [
    {
      icon: Heart,
      label: 'Total de Doações',
      value: stats?.totalDonations || 0,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      label: 'Doadores Ativos',
      value: stats?.activeDonors || 0,
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50'
    },
    {
      icon: TrendingUp,
      label: 'Vidas Impactadas',
      value: stats?.livesImpacted || 0,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Droplets,
      label: 'Bolsas Disponíveis',
      value: stats?.bloodUnitsAvailable || 0,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const performanceMetrics = [
    {
      label: 'Doações Este Mês',
      value: stats?.donationsThisMonth || '0%',
      description: 'Crescimento comparado ao mês anterior'
    },
    {
      label: 'Atendimento Emergencial',
      value: stats?.emergencyRequests || '0h',
      description: 'Disponibilidade para casos urgentes'
    },
    {
      label: 'Tempo Médio de Resposta',
      value: stats?.avgResponseTime || '0min',
      description: 'Da solicitação até a disponibilização'
    },
    {
      label: 'Taxa de Retenção',
      value: stats?.donorRetentionRate || '0%',
      description: 'Doadores que retornam regularmente'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-red-900 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impacto em Números
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Acompanhe o impacto real das doações de sangue em nossa comunidade. 
            Cada número representa vidas salvas e esperança renovada.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-red-300 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 text-red-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Não foi possível carregar as estatísticas</h3>
            <p className="text-red-200 mb-4">Exibindo dados de demonstração</p>
          </div>
        ) : null}

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}
              </h3>
              <p className="text-red-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              style={{
                animationDelay: `${(index + 4) * 150}ms`
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-1">{metric.value}</h4>
              <h5 className="text-lg font-semibold text-red-100 mb-2">{metric.label}</h5>
              <p className="text-red-200 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Blood Type Availability */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Disponibilidade por Tipo Sanguíneo</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'O+', level: 85, color: 'bg-green-500' },
              { type: 'O-', level: 45, color: 'bg-yellow-500' },
              { type: 'A+', level: 70, color: 'bg-green-500' },
              { type: 'A-', level: 30, color: 'bg-red-500' },
              { type: 'B+', level: 60, color: 'bg-yellow-500' },
              { type: 'B-', level: 25, color: 'bg-red-500' },
              { type: 'AB+', level: 40, color: 'bg-yellow-500' },
              { type: 'AB-', level: 15, color: 'bg-red-500' }
            ].map((blood) => (
              <div key={blood.type} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white">{blood.type}</span>
                  <span className="text-sm text-red-100">{blood.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`${blood.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${blood.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-full px-8 py-4 hover:shadow-lg transition-all duration-300">
            <Heart className="w-5 h-5 text-white fill-current" />
            <span className="text-white font-semibold">Seja um Doador</span>
            <Activity className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;