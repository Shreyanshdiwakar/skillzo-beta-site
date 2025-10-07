"use client";
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Users, ExternalLink, Search, Filter, Clock, Globe } from 'lucide-react';
import { extracurricularEvents, categories, types, difficulties } from './data';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredEvents = useMemo(() => {
    return extracurricularEvents.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      const matchesType = selectedType === "All" || event.type === selectedType;
      const matchesDifficulty = selectedDifficulty === "All" || event.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedDifficulty]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'STEM': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Leadership': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Business': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Social Impact': return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
      case 'Community Service': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Recommended{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Extracurriculars
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Curated opportunities to help you grow, learn, and make an impact. 
              These programs align with Skillzo&apos;s mission to empower student leaders.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>{extracurricularEvents.length} opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>Virtual & In-Person</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Year-round deadlines</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-white">Filter Opportunities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {types.map(type => (
                    <SelectItem key={type} value={type} className="text-white hover:bg-gray-700">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty} className="text-white hover:bg-gray-700">
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-gray-800 hover:border-primary/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 border-b border-gray-800 overflow-hidden">
                  {event.image && event.image !== "/skillzo_transparent.png" ? (
                    <>
                      <img 
                        src={event.image} 
                        alt={event.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/70"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20"></div>
                  )}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                    <Badge className={`${getDifficultyColor(event.difficulty)} border backdrop-blur-sm`}>{event.difficulty}</Badge>
                    <div className="flex gap-2">
                      {event.virtual && (
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 backdrop-blur-sm">Virtual</Badge>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2 drop-shadow-lg">{event.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-3 line-clamp-2">{event.description}</p>
                  <div className="bg-primary/10 border-l-4 border-primary p-3 mb-4 rounded-r">
                    <p className="text-sm text-primary font-medium"> Skillzo Insight: {event.skillzoNote}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Deadline: {formatDate(event.deadline)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {event.timeCommitment}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    <Badge className="bg-gray-700/50 text-gray-300 border-gray-600">{event.type}</Badge>
                  </div>
                  <Button 
                    className="w-full bg-primary text-black hover:bg-primary/90 font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25"
                    onClick={() => window.open(event.website, '_blank')}
                  >
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No opportunities found</h3>
            <p className="text-gray-400 max-w-md mx-auto">Try adjusting your filters or search terms to discover more opportunities that match your interests.</p>
          </div>
        )}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-yellow-600/20 rounded-3xl"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make an{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-yellow-400 bg-clip-text text-transparent">Impact?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join Skillzo&apos;s community to get personalized guidance on these opportunities and connect with like-minded students.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-8" onClick={() => window.open('/community', '_self')}>Join Community</Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8" onClick={() => window.open('/mentorship', '_self')}>Get Mentorship</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
