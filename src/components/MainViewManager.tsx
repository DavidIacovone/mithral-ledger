import { useSystemStore } from '~/store.ts';
import { Game } from '~/components/game.tsx';

export function MainViewManager() {
    const viewDisplayed = useSystemStore(state => state.viewDisplayed);

    return (
        <div>
            {viewDisplayed === "game" && <Game />}
        </div>
    )
}