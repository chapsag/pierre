import React, { useRef, useMemo } from 'react'
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber'
import { OrbitControls, Stats, useHelper } from '@react-three/drei'
import { BoxHelper } from 'three'
import * as THREE from 'three'

const CubeWithHelpers = () => {
  const cubeRef = useRef<THREE.Points>()

  useHelper(cubeRef, BoxHelper, 'white')

  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry attach="geometry" args={[110, 110, 110]} />
      <meshLambertMaterial transparent={true} opacity={0} />
    </mesh>
  )
}

const Node = () => {
  let count = 100
  const nodeRef = useRef<THREE.InstancedMesh>()
  const lightRef = useRef<THREE.PointLight>()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = Math.floor(Math.random() * 100) + 20
      const speed = (Math.random() * (0.015 - 0.01)) / 2

      const x = Math.random() * (50 - -50) + -50
      const y = Math.random() * (50 - -50) + -50
      const z = Math.random() * (50 - -50) + -50

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    // Run through the list of particles calculate some movement
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle

      // Update the particle time
      const t = (particle.time += speed)

      // Update the particle position based on the time
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )

      // Derive an oscillating value for size and rotation
      const s = Math.cos(t)
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()

      // And apply the matrix to the instanced item
      nodeRef.current.setMatrixAt(index, dummy.matrix)
    })
    nodeRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight
        ref={lightRef}
        distance={40}
        intensity={8}
        color="lightblue"
      />
      <instancedMesh ref={nodeRef} args={[null, null, count]}>
        <sphereBufferGeometry args={[0.5, 32, 16]} />
        <meshBasicMaterial color="#fffff" />
      </instancedMesh>
    </>
  )
}

const Brain = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <CubeWithHelpers />
      <Node />
      <OrbitControls />
      <Stats />
    </Canvas>
  )
}

export default Brain
