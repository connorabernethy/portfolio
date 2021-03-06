import { useState, useEffect, useRef, useCallBack } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
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

    const cubeColor = useColorModeValue('blue', 'green')

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

            // const ambientLight = new THREE.AmbientLight('rgb(255, 193, 143)', 1)
            // scene.add(ambientLight)

            const ambientLight2 = new THREE.AmbientLight(cubeColor, 1)
            scene.add(ambientLight2)

            // const dl = new THREE.DirectionalLight('rgb(143, 205, 255)', 1)
            // dl.position.set(3, 1, 2)
            // const helper = new THREE.DirectionalLightHelper(dl, 3)
            // scene.add( dl )

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            controls.enableZoom = false
            setControls(controls)

            const geometry = new THREE.BoxGeometry( 5, 5, 5 )
            const color = new THREE.Color(0xffffff)
            const material = new THREE.MeshStandardMaterial( { color: color} )
            material.wireframe = true;
            const cube = new THREE.Mesh( geometry, material )
            scene.add( cube )

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