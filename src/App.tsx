import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
// import { Card } from './components/Card/Card';
import { Counter } from './components/Counter/Counter';
import { Container } from './components/Container/Container';

export type Product = {type: string, description: string, price: number, qty: number}

type Match = {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
}

type Row = {
  team: string;
  points: number;
}

type Standing = Row[];

const App = () => {

  const [matches, setMatches] = useState<Match[]>([
    {team1: 'Milan', score1: 0, team2: 'Juve', score2: 0},
    {team1: 'Inter', score1: 0, team2: 'Roma', score2: 0},
    {team1: 'Lazio', score1: 0, team2: 'Udinese', score2: 0},
  ]);

  const [standing, setStanding] = useState<Standing>([])

  useEffect(() => {
    const newStanding: Standing = [];
    matches.forEach(({team1, team2, score1, score2}) => {
        let pointsTeam1 = score1 > score2 ? 3 : score1 === score2 ? 1 : 0;
        newStanding.push({team: team1, points: pointsTeam1})
        newStanding.push({team: team2, points: pointsTeam1 === 3 ? 0 : pointsTeam1 === 1 ? 1 : 3})
    })
    setStanding(newStanding.sort((a, b) => a.points > b.points ? -1 : 1));
  }, [matches])

  const setScore = (index: number, score: 'score1' | 'score2', value: number) => {
    matches[index][score] = Math.max(value, 0);
    setMatches([...matches]);
  }
  
  return (
    <>
      <p>Standing</p>
      <ul>
        {standing.map(item => <li>{item.team} - {item.points}</li>)}
      </ul>
      <p>Matches</p>
      <ul>
        {matches.map((item, index) => <li>{item.team1} {item.team2} - <button onClick={() => setScore(index, 'score1', item.score1 - 1)} >-</button> {item.score1} <button onClick={() => setScore(index, 'score1', item.score1 + 1)}>+</button> : <button onClick={() => setScore(index, 'score2', item.score2 - 1)}>-</button> {item.score2} <button onClick={() => setScore(index, 'score2', item.score2 + 1)}>+</button></li>)}
      </ul>
    </>
    )
}

export default App;
