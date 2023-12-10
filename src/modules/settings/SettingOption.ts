import { GameState } from '../GameConstants';
import Requirement from '../requirements/Requirement';

export default class SettingOption<T> {
    constructor(public _text: string, public value: T, public requirement? : Requirement) { }

    isUnlocked() : boolean {
        if (!this.requirement) {
            return true;
        }
        if (App.game.gameState === GameState.loading) {
            // Requirements will error, assume the value is fine
            return true;
        }
        return this.requirement.isCompleted();
    }

    get text(): string {
        return this._text;
    }
}
