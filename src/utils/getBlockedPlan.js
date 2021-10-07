import Enum from '@controlle.tecnologia/enum';

export const getBlockedPlan = (currentPlan, id) => {
    if (currentPlan && currentPlan.resources) {
        const founded = Enum.Resources.Name.find(item => {
            return item.path === id;
        });

        return founded && founded.plan ? founded.plan : '';
    }
    return '';
};
