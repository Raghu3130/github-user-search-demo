import { useState } from 'react'
import { createStore } from 'reusable';
export class SearchStore {

    static useStore = createStore(() => {
        const [selectedNode, setSelectedNode] = useState(null);
        const [forcastSettingMode, setforcastSettingMode] = useState("settings");
       
        const actions = {
            setSelectedNode,
            setforcastSettingMode,
        }

        return {
            selectedNode,
            forcastSettingMode,
            ...actions
        }
    })
}
