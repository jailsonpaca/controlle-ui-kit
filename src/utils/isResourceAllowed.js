import Enum from '@controlle.tecnologia/enum';
import { ALLOWED_ROUTES } from 'utils';

export const isResourceAllowed = (currentPlan, id) => {
    if (ALLOWED_ROUTES.indexOf(id) !== -1) {
        return true;
    }
    if (currentPlan && currentPlan.resources) {
        const founded = currentPlan.resources.find(item => {
            return (
                item.resource ===
                (
                    Enum.Resources.Name.find(resource => {
                        return resource.path === id;
                    }) || { value: item.resource, showResource: true }
                ).value
            );
        });
        return founded.showResource;
    }
    return true;
};
