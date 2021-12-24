import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import Circle from '../../public/circle.png'
import { Suspense, useCallback, useMemo, useRef } from 'react'
import { Box } from '@chakra-ui/react'

const Points = () => {
  const texture = useLoader(THREE.TextureLoader, Circle.src)
  const bufferRef = useRef<THREE.BufferAttribute>()
  const points = 100
  const step = 3

  let phase = 0
  let frequency = 0.0002
  let amplitude = 5

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(frequency * (x ** 2 + z ** 2 + phase) * amplitude)
    },
    [phase, frequency, amplitude]
  )

  let positions = useMemo(() => {
    let positions: number[] = []

    for (let xi = 0; xi < points; xi++) {
      for (let zi = 0; zi < points; zi++) {
        let x = step * (xi - points / 2)
        let z = step * (zi - points / 2)
        let y = graph(x, z)
        positions.push(x, y, z)
      }
    }

    return new Float32Array(positions)
  }, [points, step, graph]) // Helps for performance

  useFrame(() => {
    phase += 15
    const positions = bufferRef.current.array as Float32Array

    let vertex = 0
    for (let xi = 0; xi < points; xi++) {
      for (let zi = 0; zi < points; zi++) {
        let x = step * (xi - points / 2)
        let z = step * (zi - points / 2)
        positions[vertex + 1] = graph(x, z)
        vertex += 3 // 3 floats per vertex
      }
    }

    bufferRef.current.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          ref={bufferRef}
          array={positions}
          count={positions.length / 3} //3 floats per vertex
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={texture}
        color={0x00aaff}
        size={1}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  )
}

const Animation = () => {
  return (
    <Box style={{ position: 'fixed', width: '100vh', height: '100vw' }}>
      <Canvas camera={{ fov: 75, position: [100, 30, 0] }}>
        <Points />
      </Canvas>
    </Box>
  )
}

const Wave = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Animation />
    </Suspense>
  )
}

export default Wave
