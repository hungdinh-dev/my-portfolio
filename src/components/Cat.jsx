import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Cat = ({ animationName, ...props }) => {
    const group = useRef();

    const { scene } = useGLTF('/models/cat-animations/cat_creature.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    const { animations: idleAnimation } = useFBX('/models/cat-animations/cat-idle.fbx');
    const { animations: dancingAnimation } = useFBX('/models/cat-animations/cat-dancing.fbx');

    idleAnimation[0].name = 'idle';
    dancingAnimation[0].name = 'dancing';

    const { actions } = useAnimations(
        [idleAnimation[0], dancingAnimation[0]],
        group,
    );

    useEffect(() => {
        const action = actions[animationName];
        if (action) {
            action.reset().fadeIn(0.5).play();
            return () => action.fadeOut(0.5);
        }
    }, [animationName, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.302}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.material_0}
                    position={[-2.101, -1.649, -2.312]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/cat-animations/cat_creature.glb')

export default Cat;