import { Scene } from 'phaser';

// Utils
import {
    handleCreateMap,
    handleCreateHero,
    handleObjectsLayer,
    handleHeroMovement,
    handleCreateGroups,
    handleCreateControls,
    handleConfigureCamera,
    handleConfigureGridEngine,
    handleCreateHeroAnimations,
    handleCreateCharactersMovements,
} from '../../utils/sceneHelpers';

export default class GameScene extends Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        // All of these functions need to be called in order

        // Create controls
        handleCreateControls(this);

        // Create game groups
        handleCreateGroups(this);

        // Create the map
        handleCreateMap(this);

        // Create hero sprite
        handleCreateHero(this);

        // Configure grid engine
        handleConfigureGridEngine(this);

        // Load game objects like items, enemies, etc
        handleObjectsLayer(this);

        // Configure the main camera
        handleConfigureCamera(this);

        // Animations
        handleCreateHeroAnimations(this);

        // Handle characters movements
        handleCreateCharactersMovements(this);
    }

    update(time, delta) {
        handleHeroMovement(this);
        this.heroSprite.update(time, delta);
    }
}
