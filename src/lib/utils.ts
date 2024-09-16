export const formatDate = (isoString: any) => {
    const date = new Date(isoString);
    const options: any = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};