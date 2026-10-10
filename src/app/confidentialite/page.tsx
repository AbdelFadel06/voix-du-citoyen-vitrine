import type { Metadata } from "next";
import { EnBref, PageLegale, TableauDonnees } from "@/components/page-legale";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données l'application Voix du Citoyen utilise, pourquoi, qui peut les voir, combien de temps elles sont gardées et comment exercer vos droits auprès de l'APDP.",
  alternates: { canonical: "/confidentialite" },
};

const DONNEES = [
  {
    categorie: "Votre compte",
    donnees:
      "Numéro de téléphone, nom, prénoms, commune de résidence. Facultatif : quartier de résidence, adresse e-mail.",
    pourquoi:
      "Créer votre compte, vous reconnaître, envoyer vos signalements à la bonne mairie et éviter les abus.",
    obligatoire: "Obligatoire (sauf quartier et e-mail)",
  },
  {
    categorie: "Connexion",
    donnees:
      "Code reçu par SMS (gardé seulement sous forme chiffrée, valable 10 minutes), identifiant de votre téléphone pour les notifications.",
    pourquoi: "Vérifier que le numéro est bien le vôtre et vous prévenir quand votre dossier avance.",
    obligatoire: "Code : obligatoire · Notifications : au choix",
  },
  {
    categorie: "Vos signalements",
    donnees:
      "Description écrite ou message vocal, photos, vidéos, type de problème, quartier, position du problème (si vous l'acceptez) ou repère (« derrière le marché »).",
    pourquoi: "Permettre à la mairie de comprendre le problème, de le trouver et de le régler.",
    obligatoire: "Position : au choix (un repère suffit)",
  },
  {
    categorie: "Vos suggestions et soutiens",
    donnees: "Titre, description, photos de votre suggestion ; les suggestions que vous soutenez.",
    pourquoi: "Transmettre vos idées à la mairie et compter les soutiens.",
    obligatoire: "Au choix",
  },
  {
    categorie: "Suivi",
    donnees: "Historique des étapes de vos dossiers, notifications reçues.",
    pourquoi: "Vous montrer où en est chaque dossier.",
    obligatoire: "Automatique",
  },
  {
    categorie: "Données techniques",
    donnees: "Journaux de sécurité du serveur (date, adresse IP, type de requête).",
    pourquoi: "Protéger le service contre les attaques et corriger les pannes.",
    obligatoire: "Automatique",
  },
];

export default function Confidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité" majLe="octobre 2026">
      <EnBref
        points={[
          "Nous utilisons le strict nécessaire pour que vos signalements arrivent à la mairie.",
          "Votre nom et votre numéro ne sont jamais montrés : ni aux autres habitants, ni à la mairie, ni aux ONG.",
          "Votre position n'est utilisée qu'au moment d'un signalement, et seulement si vous l'acceptez.",
          "Vos données ne sont jamais vendues ni utilisées pour de la publicité.",
          "Vous pouvez consulter, corriger ou supprimer vos données, et saisir l'APDP.",
        ]}
      />

      <h2 id="responsable">1. Qui est responsable de vos données ?</h2>
      <p>
        <strong>LE BAROMETRE</strong> édite l&apos;application Voix du Citoyen et ce site. Il est
        responsable du traitement de vos données au sens du Code du numérique du Bénin.
      </p>
      <ul>
        <li>Adresse : [à compléter], Bénin</li>
        <li>
          Contact pour vos données :{" "}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Mes%20donn%C3%A9es%20personnelles`}>{CONTACT_EMAIL}</a>
        </li>
        <li>Délégué à la protection des données : [nom ou fonction à compléter]</li>
      </ul>
      <p>
        Les mairies partenaires utilisent la plateforme pour traiter les dossiers de leur commune.
        Elles s&apos;engagent à respecter les mêmes règles de confidentialité.
      </p>

      <h2 id="loi">2. Le cadre légal</h2>
      <p>
        Cette politique applique le <strong>Livre V du Code du numérique</strong> (loi n° 2017-20 du
        20 avril 2018, modifiée par la loi n° 2020-35 du 6 janvier 2021), consacré à la protection
        des données à caractère personnel. Ce texte est contrôlé par l&apos;
        <strong>Autorité de Protection des Données à caractère Personnel (APDP)</strong>.
      </p>
      <p>
        Nous respectons ses principes : données collectées pour un but précis, limitées au
        nécessaire, exactes, gardées pour une durée limitée et protégées. Le traitement a fait
        l&apos;objet des formalités prévues auprès de l&apos;APDP : [numéro de récépissé à compléter].
      </p>

      <h2 id="donnees">3. Les données que nous utilisons</h2>
      <TableauDonnees lignes={DONNEES} />
      <h3>Ce que nous ne collectons pas</h3>
      <ul>
        <li>Votre position en continu ou en arrière-plan.</li>
        <li>Vos contacts, vos messages, vos autres applications.</li>
        <li>
          Les informations cachées de vos photos (modèle du téléphone, lieu de prise de vue…) :
          elles sont <strong>effacées automatiquement</strong> à l&apos;envoi.
        </li>
      </ul>
      <h3>Un conseil</h3>
      <p>
        N&apos;indiquez pas d&apos;informations sensibles (santé, religion, opinions politiques,
        origine ethnique) dans vos descriptions et messages vocaux. Évitez de photographier le visage
        de personnes ou des plaques d&apos;immatriculation : ce n&apos;est pas utile pour traiter le
        problème.
      </p>

      <h2 id="pourquoi">4. Pourquoi et sur quelle base</h2>
      <ul>
        <li>
          <strong>Fournir le service que vous demandez</strong> (compte, signalements, suggestions,
          suivi) : c&apos;est la raison principale.
        </li>
        <li>
          <strong>Votre consentement</strong> pour la position, le micro, l&apos;appareil photo et
          les notifications. Vous pouvez le retirer à tout moment dans les réglages de votre
          téléphone.
        </li>
        <li>
          <strong>L&apos;intérêt public</strong> : aider les communes à améliorer les services
          rendus aux habitants. Les tableaux de bord des mairies et des ONG n&apos;utilisent que des
          chiffres regroupés, sans identité.
        </li>
        <li>
          <strong>La sécurité</strong> : limiter les abus (par exemple 10 signalements par jour et
          par personne, 5 demandes de code SMS par heure).
        </li>
      </ul>

      <h2 id="anonymat">5. Votre anonymat</h2>
      <p>
        C&apos;est notre engagement principal. Quand vous signalez un problème ou proposez une
        idée, <strong>personne ne reçoit votre nom ni votre numéro</strong> : ni les autres
        habitants, ni la mairie, ni les organisations partenaires. Vous seul voyez votre identité
        sur vos propres dossiers.
      </p>
      <p>
        Gardez à l&apos;esprit qu&apos;un message vocal fait entendre votre voix, et qu&apos;une
        photo ou un repère très précis (« devant ma maison ») peut parfois permettre de vous
        reconnaître.
      </p>

      <h2 id="destinataires">6. Qui voit quoi</h2>
      <ul>
        <li>
          <strong>La mairie de la commune concernée</strong> : le contenu de vos signalements et
          suggestions (texte, voix, photos, lieu), pour les traiter. Jamais votre identité.
        </li>
        <li>
          <strong>Les ONG et organisations habilitées</strong> : en lecture seule, uniquement les
          signalements de leurs domaines d&apos;action, sans identité. Leur accès peut être suspendu
          à tout moment.
        </li>
        <li>
          <strong>Les autres habitants</strong> : les suggestions publiées, leur nombre de soutiens,
          et les réalisations de la mairie.
        </li>
        <li>
          <strong>Nos prestataires techniques</strong>, uniquement pour faire fonctionner le
          service : l&apos;opérateur qui envoie les SMS, Google (Firebase) pour les notifications,
          l&apos;hébergement du serveur et des fichiers. Ils n&apos;ont pas le droit d&apos;utiliser
          vos données pour autre chose.
        </li>
        <li>
          <strong>Les autorités</strong>, seulement si la loi nous y oblige.
        </li>
      </ul>
      <p>
        <strong>Vos données ne sont jamais vendues</strong>, ni utilisées pour de la publicité.
      </p>

      <h2 id="transferts">7. Données envoyées hors du Bénin</h2>
      <p>
        Certains prestataires (notamment le service de notifications de Google) peuvent traiter des
        données hors du Bénin. Ces envois se font uniquement dans les conditions prévues par le Code
        du numérique : vers des pays qui offrent une protection suffisante, ou avec les garanties et
        autorisations exigées par l&apos;APDP. Liste des prestataires et des pays concernés : [à
        compléter].
      </p>

      <h2 id="duree">8. Combien de temps nous les gardons</h2>
      <ul>
        <li>Code reçu par SMS : 10 minutes, puis il n&apos;est plus utilisable.</li>
        <li>Photos, vidéos et sons envoyés mais jamais rattachés à un dossier : effacés après 24 heures.</li>
        <li>Votre compte : tant que vous l&apos;utilisez. [Délai d&apos;inactivité avant suppression à compléter.]</li>
        <li>
          Vos signalements et suggestions : le temps de leur traitement, puis [durée à compléter].
          Ensuite, ils ne sont gardés que sous forme anonyme, pour les statistiques de la commune.
        </li>
        <li>Journaux techniques : [durée à compléter, par exemple 12 mois].</li>
      </ul>

      <h2 id="securite">9. Comment nous les protégeons</h2>
      <ul>
        <li>Tous les échanges avec l&apos;application sont chiffrés (HTTPS).</li>
        <li>Le code reçu par SMS n&apos;est jamais gardé en clair, et le nombre d&apos;essais est limité.</li>
        <li>Chacun n&apos;accède qu&apos;à ce dont il a besoin : un agent voit les dossiers de sa commune, une ONG ceux de ses domaines.</li>
        <li>Les informations cachées des photos (position, modèle du téléphone) sont effacées.</li>
        <li>En cas de fuite de données présentant un risque pour vous, nous prévenons l&apos;APDP et, si besoin, les personnes concernées.</li>
      </ul>

      <h2 id="droits">10. Vos droits</h2>
      <p>Le Code du numérique vous donne le droit :</p>
      <ul>
        <li><strong>d&apos;être informé</strong> de ce que nous faisons de vos données (c&apos;est l&apos;objet de cette page) ;</li>
        <li><strong>d&apos;accéder</strong> à vos données et d&apos;en obtenir une copie ;</li>
        <li><strong>de les corriger</strong> ou de les compléter ;</li>
        <li><strong>de les faire supprimer</strong>, y compris votre compte ;</li>
        <li><strong>de vous opposer</strong> à leur utilisation pour un motif légitime ;</li>
        <li><strong>de retirer votre consentement</strong> (position, notifications…) à tout moment.</li>
      </ul>
      <p>
        Vous pouvez modifier votre profil directement dans l&apos;application. Pour toute autre
        demande, écrivez à{" "}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Exercice%20de%20mes%20droits`}>{CONTACT_EMAIL}</a>{" "}
        depuis le numéro ou l&apos;e-mail lié à votre compte, en précisant votre demande. Nous
        répondons dans les meilleurs délais et au plus tard dans le délai fixé par la loi.
      </p>

      <h2 id="apdp">11. Faire une réclamation</h2>
      <p>
        Si vous pensez que vos droits ne sont pas respectés, contactez-nous d&apos;abord. Vous
        pouvez aussi saisir directement l&apos;
        <strong>Autorité de Protection des Données à caractère Personnel (APDP)</strong> :{" "}
        <a href="https://apdp.bj" target="_blank" rel="noopener">apdp.bj</a>.
      </p>

      <h2 id="site">12. Ce site internet</h2>
      <p>
        Ce site ne demande aucune inscription et n&apos;utilise ni cookie publicitaire, ni outil de
        mesure d&apos;audience. Seuls les journaux techniques du serveur sont conservés, pour la
        sécurité.
      </p>

      <h2 id="changements">13. Changements</h2>
      <p>
        Si cette politique change de façon importante, nous vous prévenons dans l&apos;application
        avant que le changement s&apos;applique. La date de mise à jour figure en haut de la page.
      </p>
    </PageLegale>
  );
}
