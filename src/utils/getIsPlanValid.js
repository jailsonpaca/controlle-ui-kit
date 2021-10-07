export const getIsPlanValid = currentPlan =>
    !!currentPlan && currentPlan !== 'EXPIRED' && currentPlan.plan && currentPlan.plan.status !== 0;
