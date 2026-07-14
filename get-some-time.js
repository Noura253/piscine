function premierJourSemaine(semaine, annee) {
    annee = Number(annee);

    // 1er janvier
    const premierJan = new Date(annee, 0, 1);

    // Jour de la semaine (0 = dimanche, 1 = lundi, ..., 6 = samedi)
    let jour = premierJan.getDay();
    if (jour === 0) jour = 7;

    // Premier lundi de la semaine 1
    let premierLundi = new Date(premierJan);
    premierLundi.setDate(premierJan.getDate() - (jour - 1));

    // Si ce lundi est dans l'année précédente, on prend le 1er janvier
    if (premierLundi.getFullYear() < annee) {
        premierLundi = new Date(premierJan);
    }

    // Ajouter les semaines
    premierLundi.setDate(premierLundi.getDate() + (semaine - 1) * 7);

    const jj = String(premierLundi.getDate()).padStart(2, "0");
    const mm = String(premierLundi.getMonth() + 1).padStart(2, "0");
    const aaaa = premierLundi.getFullYear();

    return `${jj}-${mm}-${aaaa}`;
}