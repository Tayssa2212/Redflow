'use client';

import { useState, useEffect } from 'react';
import { User, Mail, MapPin, Calendar, Loader2, AlertCircle, Stethoscope, Heart } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  location: string;
  joinDate: string;
  lastActive: string;
  specialization?: string;
  avatar?: string;
}

const UsersSection = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://redflow-api.example.com/api/team', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team');
      }
      
      const data = await response.json();
      setTeam(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback demo data
      setTeam([
        {
          id: '1',
          name: 'Dra. Maria Santos',
          email: 'maria.santos@redflow.com',
          role: 'Hematologista',
          specialization: 'Medicina Transfusional',
          location: 'São Paulo, SP',
          joinDate: '2022-03-15',
          lastActive: '2024-01-20T10:30:00Z'
        },
        {
          id: '2',
          name: 'Dr. João Silva',
          email: 'joao.silva@redflow.com',
          role: 'Coordenador Médico',
          specialization: 'Hemoterapia',
          location: 'Rio de Janeiro, RJ',
          joinDate: '2021-08-22',
          lastActive: '2024-01-20T14:15:00Z'
        },
        {
          id: '3',
          name: 'Ana Costa',
          email: 'ana.costa@redflow.com',
          role: 'Enfermeira Especialista',
          specialization: 'Coleta de Sangue',
          location: 'Belo Horizonte, MG',
          joinDate: '2023-01-10',
          lastActive: '2024-01-20T16:45:00Z'
        },
        {
          id: '4',
          name: 'Carlos Oliveira',
          email: 'carlos.oliveira@redflow.com',
          role: 'Técnico em Hemoterapia',
          specialization: 'Processamento de Sangue',
          location: 'Porto Alegre, RS',
          joinDate: '2022-11-05',
          lastActive: '2024-01-20T09:20:00Z'
        },
        {
          id: '5',
          name: 'Dra. Lucia Ferreira',
          email: 'lucia.ferreira@redflow.com',
          role: 'Diretora Técnica',
          specialization: 'Gestão de Banco de Sangue',
          location: 'Brasília, DF',
          joinDate: '2020-05-18',
          lastActive: '2024-01-20T13:10:00Z'
        },
        {
          id: '6',
          name: 'Roberto Lima',
          email: 'roberto.lima@redflow.com',
          role: 'Coordenador de Qualidade',
          specialization: 'Controle de Qualidade',
          location: 'Salvador, BA',
          joinDate: '2023-07-02',
          lastActive: '2024-01-20T15:25:00Z'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'hematologista':
        return 'bg-red-100 text-red-800';
      case 'coordenador médico':
        return 'bg-rose-100 text-rose-800';
      case 'enfermeira especialista':
        return 'bg-pink-100 text-pink-800';
      case 'técnico em hemoterapia':
        return 'bg-purple-100 text-purple-800';
      case 'diretora técnica':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Agora mesmo';
    if (diffHours < 24) return `${diffHours}h atrás`;
    if (diffHours < 48) return 'Ontem';
    return `${Math.floor(diffHours / 24)}d atrás`;
  };

  return (
    <section id="users" className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Equipe Médica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que tornam o RedFlow possível. 
            Nossa equipe multidisciplinar trabalha incansavelmente para salvar vidas através da doação de sangue.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Não foi possível carregar a equipe</h3>
            <p className="text-gray-600 mb-4">Exibindo dados de demonstração</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-red-100"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      getInitials(member.name)
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                  </div>
                </div>
                
                {member.specialization && (
                  <div className="flex items-center space-x-2 mb-4 p-3 bg-red-50 rounded-lg">
                    <Stethoscope className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-700">{member.specialization}</span>
                  </div>
                )}
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{member.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Desde {formatDate(member.joinDate)}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-rose-50 border-t border-red-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Última atividade</span>
                  <span className="text-sm font-medium text-gray-900">{getTimeAgo(member.lastActive)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">{team.length}</div>
            <div className="text-gray-600">Profissionais Ativos</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-rose-600 mb-2">6</div>
            <div className="text-gray-600">Especialidades</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-pink-600 mb-2">6</div>
            <div className="text-gray-600">Cidades Atendidas</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Atendimento</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;