import React from 'react';
import ParticleType, { States } from '../types/ParticleType';
import * as Constants from './constants';
import Canvas from './Canvas';

interface AnimationState {
  particles: ParticleType[];
  rAF: number;
}

class Animation extends React.Component {
  state = {
    rAF: 0,
    particles: this.generateNRandomParticles(Constants.NUMBER_OF_PARTICLES)
  }

  updateAnimationState = () => {
    let particles: ParticleType[] = [];
    for(let particle of this.state.particles) {
      let x = particle.x + particle.dx;
      let y = particle.y + particle.dy;
      let dx = this.isInRange(x, Constants.CANVAS_WIDTH) ? particle.dx : -particle.dx;
      let dy = this.isInRange(y, Constants.CANVAS_HEIGHT) ? particle.dy : -particle.dy;
      particles.push({x, y, dx, dy, state: particle.state});
    }
    let rAF = requestAnimationFrame(this.updateAnimationState);
    this.setState({rAF: rAF, particles: particles});
  }

  isInRange(x: number, range: number) : boolean {
    return  (x >= Constants.PARTICLE_RADIUS && x <= range - Constants.PARTICLE_RADIUS);
  }

  componentDidMount() {
    let rAF = requestAnimationFrame(this.updateAnimationState);
    this.setState({rAF: rAF});
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.rAF);
  }

  generateRandomParticle() : ParticleType {
    let x = Constants.PARTICLE_RADIUS + Math.random() * (Constants.CANVAS_WIDTH - 2 * Constants.PARTICLE_RADIUS);
    let y = Constants.PARTICLE_RADIUS + Math.random() * (Constants.CANVAS_HEIGHT - 2 * Constants.PARTICLE_RADIUS);
    let dx = (Math.random() - 0.5) * Constants.MAX_SPEED;
    let dy = (Math.random() - 0.5) * Constants.MAX_SPEED;

    return {x, y, dx, dy, state: (Math.random() >= 0.05) ? States.Healthy : States.Infected};
  }
  
  generateNRandomParticles(n: number) : ParticleType[] {
    let particles: ParticleType[] = [];
    for(let i = 0; i < n; i++){
      particles.push(this.generateRandomParticle());
    }
    return particles;
  }

  render() {
    return <div>
      <Canvas particles={this.state.particles}/> 
    </div>
  }
}

export default Animation;