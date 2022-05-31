import { useState, useEffect, useRef, useCallBack } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Obj = () => {
    const refContainer = useRef()
    const [ loading, setLoading ] = useState(true)
    const [ renderer, setRenderer ] = useState()
    const [ _camera, setCamera ] = useState()
    const [ target ] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const [ initialCameraPosition ] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )

    const [ scene ] = useState(new THREE.Scene())
    const [ _controls, setControls ] = useState()

    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH )
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const scale = scH * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const pointLight = new THREE.PointLight(0xd33, 5.5)
            pointLight.position.x = 3
            pointLight.position.y = -5
            pointLight.position.z = 1
            scene.add(pointLight)

            // const ambientLight = new THREE.AmbientLight(0xcccccc, 100)
            // scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            const textureLoader = new THREE.TextureLoader()

            const normalTexture = textureLoader.load('/public/normal.png')

            const geometry = new THREE.SphereGeometry( 2, 32, 32 )
            const color = new THREE.Color(0x292929)
            const material = new THREE.MeshStandardMaterial( { color: color} )
            material.normalMap = normalTexture
            material.metalness = 0.7
            material.roughness = 0.3
            const sphere = new THREE.Mesh( geometry, material )
            scene.add( sphere )

            let req = null
            let frame = 0
            const render = () => {
                req = requestAnimationFrame(render)
                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100){
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

                    camera.position.y = 10
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                }
                else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }
            render()
            setLoading(false)
        }
    }, [])

    return (<Box ref={refContainer} 
    className="3d" 
    m="auto" 
    mt={['-20px', '-60px', '-120px']} 
    mb={['-40px', '-140px', '-200px']} 
    w={[280, 480, 640]} 
    h={[280, 480, 640]} 
    position="relative">{
        loading && (
            <Spinner size="xl" position="absolute" left="50%" top="50%" ml="calc(0px - var(--spinner-size) / 2)" mt="calc(0px - var(--spinner-size))"></Spinner>
        )
    }
</Box>)
}

export default Obj