import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sid','data','expiresAt','createdAt','updatedAt']);

export const ImpostazioniScalarFieldEnumSchema = z.enum(['id','userId','useGlossaryTerms','showTooltips','fontSize','showStatsOnLogin','notificationsEmail','contrastMode']);

export const UserScalarFieldEnumSchema = z.enum(['id','username','email','password','nome','cognome','createdAt','updatedAt']);

export const VestitoScalarFieldEnumSchema = z.enum(['id','title','description','isPublished','startDate','endDate','viewCount','submissionCount','customTheme','userId','createdAt','updatedAt']);

export const CollaboratorScalarFieldEnumSchema = z.enum(['userId','vestitoId','role']);

export const TessutoScalarFieldEnumSchema = z.enum(['id','title','vestitoId','order','createdAt','updatedAt']);

export const TramaScalarFieldEnumSchema = z.enum(['id','title','order','createdAt','updatedAt','tessutoId']);

export const FiloScalarFieldEnumSchema = z.enum(['id','title','description','tramaId','order','createdAt','updatedAt']);

export const FibraScalarFieldEnumSchema = z.enum(['id','nome','definizione','filoId','createdAt','updatedAt']);

export const NotificationScalarFieldEnumSchema = z.enum(['id','type','message','read','userId','createdAt']);

export const MediaScalarFieldEnumSchema = z.enum(['id','url','type','description','filoId','createdAt']);

export const VoteScalarFieldEnumSchema = z.enum(['id','value','userId','vestitoId','createdAt']);

export const FormResponseScalarFieldEnumSchema = z.enum(['id','filoId','data','submittedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  sid: z.string(),
  data: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// IMPOSTAZIONI SCHEMA
/////////////////////////////////////////

export const ImpostazioniSchema = z.object({
  id: z.string(),
  userId: z.string(),
  useGlossaryTerms: z.boolean(),
  showTooltips: z.boolean(),
  fontSize: z.string(),
  showStatsOnLogin: z.boolean(),
  notificationsEmail: z.boolean(),
  contrastMode: z.boolean(),
})

export type Impostazioni = z.infer<typeof ImpostazioniSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// VESTITO SCHEMA
/////////////////////////////////////////

export const VestitoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  isPublished: z.boolean(),
  startDate: z.coerce.date().nullable(),
  endDate: z.coerce.date().nullable(),
  viewCount: z.number().int(),
  submissionCount: z.number().int(),
  customTheme: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Vestito = z.infer<typeof VestitoSchema>

/////////////////////////////////////////
// COLLABORATOR SCHEMA
/////////////////////////////////////////

export const CollaboratorSchema = z.object({
  userId: z.string(),
  vestitoId: z.string(),
  role: z.string(),
})

export type Collaborator = z.infer<typeof CollaboratorSchema>

/////////////////////////////////////////
// TESSUTO SCHEMA
/////////////////////////////////////////

export const TessutoSchema = z.object({
  id: z.string(),
  title: z.string(),
  vestitoId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tessuto = z.infer<typeof TessutoSchema>

/////////////////////////////////////////
// TRAMA SCHEMA
/////////////////////////////////////////

export const TramaSchema = z.object({
  id: z.string(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  tessutoId: z.string(),
})

export type Trama = z.infer<typeof TramaSchema>

/////////////////////////////////////////
// FILO SCHEMA
/////////////////////////////////////////

export const FiloSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  tramaId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Filo = z.infer<typeof FiloSchema>

/////////////////////////////////////////
// FIBRA SCHEMA
/////////////////////////////////////////

export const FibraSchema = z.object({
  id: z.string(),
  nome: z.string(),
  definizione: z.string(),
  filoId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Fibra = z.infer<typeof FibraSchema>

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  id: z.string(),
  type: z.string(),
  message: z.string(),
  read: z.boolean(),
  userId: z.string(),
  createdAt: z.coerce.date(),
})

export type Notification = z.infer<typeof NotificationSchema>

/////////////////////////////////////////
// MEDIA SCHEMA
/////////////////////////////////////////

export const MediaSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: z.string(),
  description: z.string().nullable(),
  filoId: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type Media = z.infer<typeof MediaSchema>

/////////////////////////////////////////
// VOTE SCHEMA
/////////////////////////////////////////

export const VoteSchema = z.object({
  id: z.string(),
  value: z.number().int(),
  userId: z.string(),
  vestitoId: z.string(),
  createdAt: z.coerce.date(),
})

export type Vote = z.infer<typeof VoteSchema>

/////////////////////////////////////////
// FORM RESPONSE SCHEMA
/////////////////////////////////////////

export const FormResponseSchema = z.object({
  id: z.string(),
  filoId: z.string(),
  data: z.string(),
  submittedAt: z.coerce.date(),
})

export type FormResponse = z.infer<typeof FormResponseSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// SESSION
//------------------------------------------------------

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sid: z.boolean().optional(),
  data: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// IMPOSTAZIONI
//------------------------------------------------------

export const ImpostazioniIncludeSchema: z.ZodType<Prisma.ImpostazioniInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ImpostazioniArgsSchema: z.ZodType<Prisma.ImpostazioniDefaultArgs> = z.object({
  select: z.lazy(() => ImpostazioniSelectSchema).optional(),
  include: z.lazy(() => ImpostazioniIncludeSchema).optional(),
}).strict();

export const ImpostazioniSelectSchema: z.ZodType<Prisma.ImpostazioniSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  useGlossaryTerms: z.boolean().optional(),
  showTooltips: z.boolean().optional(),
  fontSize: z.boolean().optional(),
  showStatsOnLogin: z.boolean().optional(),
  notificationsEmail: z.boolean().optional(),
  contrastMode: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  vestiti: z.union([z.boolean(),z.lazy(() => VestitoFindManyArgsSchema)]).optional(),
  collaboratedVestiti: z.union([z.boolean(),z.lazy(() => CollaboratorFindManyArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  Vote: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  impostazioni: z.union([z.boolean(),z.lazy(() => ImpostazioniArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  vestiti: z.boolean().optional(),
  collaboratedVestiti: z.boolean().optional(),
  notifications: z.boolean().optional(),
  Vote: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  nome: z.boolean().optional(),
  cognome: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vestiti: z.union([z.boolean(),z.lazy(() => VestitoFindManyArgsSchema)]).optional(),
  collaboratedVestiti: z.union([z.boolean(),z.lazy(() => CollaboratorFindManyArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  Vote: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  impostazioni: z.union([z.boolean(),z.lazy(() => ImpostazioniArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VESTITO
//------------------------------------------------------

export const VestitoIncludeSchema: z.ZodType<Prisma.VestitoInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tessuti: z.union([z.boolean(),z.lazy(() => TessutoFindManyArgsSchema)]).optional(),
  collaborators: z.union([z.boolean(),z.lazy(() => CollaboratorFindManyArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VestitoCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const VestitoArgsSchema: z.ZodType<Prisma.VestitoDefaultArgs> = z.object({
  select: z.lazy(() => VestitoSelectSchema).optional(),
  include: z.lazy(() => VestitoIncludeSchema).optional(),
}).strict();

export const VestitoCountOutputTypeArgsSchema: z.ZodType<Prisma.VestitoCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => VestitoCountOutputTypeSelectSchema).nullish(),
}).strict();

export const VestitoCountOutputTypeSelectSchema: z.ZodType<Prisma.VestitoCountOutputTypeSelect> = z.object({
  tessuti: z.boolean().optional(),
  collaborators: z.boolean().optional(),
  votes: z.boolean().optional(),
}).strict();

export const VestitoSelectSchema: z.ZodType<Prisma.VestitoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  viewCount: z.boolean().optional(),
  submissionCount: z.boolean().optional(),
  customTheme: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tessuti: z.union([z.boolean(),z.lazy(() => TessutoFindManyArgsSchema)]).optional(),
  collaborators: z.union([z.boolean(),z.lazy(() => CollaboratorFindManyArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VestitoCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COLLABORATOR
//------------------------------------------------------

export const CollaboratorIncludeSchema: z.ZodType<Prisma.CollaboratorInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  vestito: z.union([z.boolean(),z.lazy(() => VestitoArgsSchema)]).optional(),
}).strict()

export const CollaboratorArgsSchema: z.ZodType<Prisma.CollaboratorDefaultArgs> = z.object({
  select: z.lazy(() => CollaboratorSelectSchema).optional(),
  include: z.lazy(() => CollaboratorIncludeSchema).optional(),
}).strict();

export const CollaboratorSelectSchema: z.ZodType<Prisma.CollaboratorSelect> = z.object({
  userId: z.boolean().optional(),
  vestitoId: z.boolean().optional(),
  role: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  vestito: z.union([z.boolean(),z.lazy(() => VestitoArgsSchema)]).optional(),
}).strict()

// TESSUTO
//------------------------------------------------------

export const TessutoIncludeSchema: z.ZodType<Prisma.TessutoInclude> = z.object({
  vestito: z.union([z.boolean(),z.lazy(() => VestitoArgsSchema)]).optional(),
  trame: z.union([z.boolean(),z.lazy(() => TramaFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TessutoCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TessutoArgsSchema: z.ZodType<Prisma.TessutoDefaultArgs> = z.object({
  select: z.lazy(() => TessutoSelectSchema).optional(),
  include: z.lazy(() => TessutoIncludeSchema).optional(),
}).strict();

export const TessutoCountOutputTypeArgsSchema: z.ZodType<Prisma.TessutoCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TessutoCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TessutoCountOutputTypeSelectSchema: z.ZodType<Prisma.TessutoCountOutputTypeSelect> = z.object({
  trame: z.boolean().optional(),
}).strict();

export const TessutoSelectSchema: z.ZodType<Prisma.TessutoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  vestitoId: z.boolean().optional(),
  order: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vestito: z.union([z.boolean(),z.lazy(() => VestitoArgsSchema)]).optional(),
  trame: z.union([z.boolean(),z.lazy(() => TramaFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TessutoCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TRAMA
//------------------------------------------------------

export const TramaIncludeSchema: z.ZodType<Prisma.TramaInclude> = z.object({
  fili: z.union([z.boolean(),z.lazy(() => FiloFindManyArgsSchema)]).optional(),
  tessuto: z.union([z.boolean(),z.lazy(() => TessutoArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TramaCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TramaArgsSchema: z.ZodType<Prisma.TramaDefaultArgs> = z.object({
  select: z.lazy(() => TramaSelectSchema).optional(),
  include: z.lazy(() => TramaIncludeSchema).optional(),
}).strict();

export const TramaCountOutputTypeArgsSchema: z.ZodType<Prisma.TramaCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TramaCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TramaCountOutputTypeSelectSchema: z.ZodType<Prisma.TramaCountOutputTypeSelect> = z.object({
  fili: z.boolean().optional(),
}).strict();

export const TramaSelectSchema: z.ZodType<Prisma.TramaSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  order: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tessutoId: z.boolean().optional(),
  fili: z.union([z.boolean(),z.lazy(() => FiloFindManyArgsSchema)]).optional(),
  tessuto: z.union([z.boolean(),z.lazy(() => TessutoArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TramaCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FILO
//------------------------------------------------------

export const FiloIncludeSchema: z.ZodType<Prisma.FiloInclude> = z.object({
  trama: z.union([z.boolean(),z.lazy(() => TramaArgsSchema)]).optional(),
  fibre: z.union([z.boolean(),z.lazy(() => FibraFindManyArgsSchema)]).optional(),
  media: z.union([z.boolean(),z.lazy(() => MediaFindManyArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => FormResponseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FiloCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FiloArgsSchema: z.ZodType<Prisma.FiloDefaultArgs> = z.object({
  select: z.lazy(() => FiloSelectSchema).optional(),
  include: z.lazy(() => FiloIncludeSchema).optional(),
}).strict();

export const FiloCountOutputTypeArgsSchema: z.ZodType<Prisma.FiloCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FiloCountOutputTypeSelectSchema).nullish(),
}).strict();

export const FiloCountOutputTypeSelectSchema: z.ZodType<Prisma.FiloCountOutputTypeSelect> = z.object({
  fibre: z.boolean().optional(),
  media: z.boolean().optional(),
  responses: z.boolean().optional(),
}).strict();

export const FiloSelectSchema: z.ZodType<Prisma.FiloSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  tramaId: z.boolean().optional(),
  order: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  trama: z.union([z.boolean(),z.lazy(() => TramaArgsSchema)]).optional(),
  fibre: z.union([z.boolean(),z.lazy(() => FibraFindManyArgsSchema)]).optional(),
  media: z.union([z.boolean(),z.lazy(() => MediaFindManyArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => FormResponseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FiloCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FIBRA
//------------------------------------------------------

export const FibraIncludeSchema: z.ZodType<Prisma.FibraInclude> = z.object({
  filo: z.union([z.boolean(),z.lazy(() => FiloArgsSchema)]).optional(),
}).strict()

export const FibraArgsSchema: z.ZodType<Prisma.FibraDefaultArgs> = z.object({
  select: z.lazy(() => FibraSelectSchema).optional(),
  include: z.lazy(() => FibraIncludeSchema).optional(),
}).strict();

export const FibraSelectSchema: z.ZodType<Prisma.FibraSelect> = z.object({
  id: z.boolean().optional(),
  nome: z.boolean().optional(),
  definizione: z.boolean().optional(),
  filoId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  filo: z.union([z.boolean(),z.lazy(() => FiloArgsSchema)]).optional(),
}).strict()

// NOTIFICATION
//------------------------------------------------------

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const NotificationArgsSchema: z.ZodType<Prisma.NotificationDefaultArgs> = z.object({
  select: z.lazy(() => NotificationSelectSchema).optional(),
  include: z.lazy(() => NotificationIncludeSchema).optional(),
}).strict();

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  message: z.boolean().optional(),
  read: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// MEDIA
//------------------------------------------------------

export const MediaIncludeSchema: z.ZodType<Prisma.MediaInclude> = z.object({
  filo: z.union([z.boolean(),z.lazy(() => FiloArgsSchema)]).optional(),
}).strict()

export const MediaArgsSchema: z.ZodType<Prisma.MediaDefaultArgs> = z.object({
  select: z.lazy(() => MediaSelectSchema).optional(),
  include: z.lazy(() => MediaIncludeSchema).optional(),
}).strict();

export const MediaSelectSchema: z.ZodType<Prisma.MediaSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  filoId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  filo: z.union([z.boolean(),z.lazy(() => FiloArgsSchema)]).optional(),
}).strict()

// VOTE
//------------------------------------------------------

export const VoteIncludeSchema: z.ZodType<Prisma.VoteInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  vestito: z.union([z.boolean(),z.lazy(() => VestitoArgsSchema)]).optional(),
}).strict()

export const VoteArgsSchema: z.ZodType<Prisma.VoteDefaultArgs> = z.object({
  select: z.lazy(() => VoteSelectSchema).optional(),
  include: z.lazy(() => VoteIncludeSchema).optional(),
}).strict();

export const VoteSelectSchema: z.ZodType<Prisma.VoteSelect> = z.object({
  id: z.boolean().optional(),
  value: z.boolean().optional(),
  userId: z.boolean().optional(),
  vestitoId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  vestito: z.union([z.boolean(),z.lazy(() => VestitoArgsSchema)]).optional(),
}).strict()

// FORM RESPONSE
//------------------------------------------------------

export const FormResponseIncludeSchema: z.ZodType<Prisma.FormResponseInclude> = z.object({
  filo: z.union([z.boolean(),z.lazy(() => FiloArgsSchema)]).optional(),
}).strict()

export const FormResponseArgsSchema: z.ZodType<Prisma.FormResponseDefaultArgs> = z.object({
  select: z.lazy(() => FormResponseSelectSchema).optional(),
  include: z.lazy(() => FormResponseIncludeSchema).optional(),
}).strict();

export const FormResponseSelectSchema: z.ZodType<Prisma.FormResponseSelect> = z.object({
  id: z.boolean().optional(),
  filoId: z.boolean().optional(),
  data: z.boolean().optional(),
  submittedAt: z.boolean().optional(),
  filo: z.union([z.boolean(),z.lazy(() => FiloArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sid: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    sid: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    sid: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  sid: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sid: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ImpostazioniWhereInputSchema: z.ZodType<Prisma.ImpostazioniWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImpostazioniWhereInputSchema),z.lazy(() => ImpostazioniWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImpostazioniWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImpostazioniWhereInputSchema),z.lazy(() => ImpostazioniWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  useGlossaryTerms: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  showTooltips: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  fontSize: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  showStatsOnLogin: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  notificationsEmail: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  contrastMode: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const ImpostazioniOrderByWithRelationInputSchema: z.ZodType<Prisma.ImpostazioniOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  useGlossaryTerms: z.lazy(() => SortOrderSchema).optional(),
  showTooltips: z.lazy(() => SortOrderSchema).optional(),
  fontSize: z.lazy(() => SortOrderSchema).optional(),
  showStatsOnLogin: z.lazy(() => SortOrderSchema).optional(),
  notificationsEmail: z.lazy(() => SortOrderSchema).optional(),
  contrastMode: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const ImpostazioniWhereUniqueInputSchema: z.ZodType<Prisma.ImpostazioniWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => ImpostazioniWhereInputSchema),z.lazy(() => ImpostazioniWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImpostazioniWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImpostazioniWhereInputSchema),z.lazy(() => ImpostazioniWhereInputSchema).array() ]).optional(),
  useGlossaryTerms: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  showTooltips: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  fontSize: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  showStatsOnLogin: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  notificationsEmail: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  contrastMode: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const ImpostazioniOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImpostazioniOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  useGlossaryTerms: z.lazy(() => SortOrderSchema).optional(),
  showTooltips: z.lazy(() => SortOrderSchema).optional(),
  fontSize: z.lazy(() => SortOrderSchema).optional(),
  showStatsOnLogin: z.lazy(() => SortOrderSchema).optional(),
  notificationsEmail: z.lazy(() => SortOrderSchema).optional(),
  contrastMode: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ImpostazioniCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImpostazioniMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImpostazioniMinOrderByAggregateInputSchema).optional()
}).strict();

export const ImpostazioniScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImpostazioniScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ImpostazioniScalarWhereWithAggregatesInputSchema),z.lazy(() => ImpostazioniScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImpostazioniScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImpostazioniScalarWhereWithAggregatesInputSchema),z.lazy(() => ImpostazioniScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  useGlossaryTerms: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  showTooltips: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  fontSize: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  showStatsOnLogin: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  notificationsEmail: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  contrastMode: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cognome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  vestiti: z.lazy(() => VestitoListRelationFilterSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorListRelationFilterSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  Vote: z.lazy(() => VoteListRelationFilterSchema).optional(),
  impostazioni: z.union([ z.lazy(() => ImpostazioniNullableRelationFilterSchema),z.lazy(() => ImpostazioniWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cognome: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  vestiti: z.lazy(() => VestitoOrderByRelationAggregateInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorOrderByRelationAggregateInputSchema).optional(),
  notifications: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  Vote: z.lazy(() => VoteOrderByRelationAggregateInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cognome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  vestiti: z.lazy(() => VestitoListRelationFilterSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorListRelationFilterSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  Vote: z.lazy(() => VoteListRelationFilterSchema).optional(),
  impostazioni: z.union([ z.lazy(() => ImpostazioniNullableRelationFilterSchema),z.lazy(() => ImpostazioniWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cognome: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cognome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VestitoWhereInputSchema: z.ZodType<Prisma.VestitoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VestitoWhereInputSchema),z.lazy(() => VestitoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VestitoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VestitoWhereInputSchema),z.lazy(() => VestitoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  viewCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  submissionCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  customTheme: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoListRelationFilterSchema).optional(),
  collaborators: z.lazy(() => CollaboratorListRelationFilterSchema).optional(),
  votes: z.lazy(() => VoteListRelationFilterSchema).optional()
}).strict();

export const VestitoOrderByWithRelationInputSchema: z.ZodType<Prisma.VestitoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional(),
  customTheme: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  tessuti: z.lazy(() => TessutoOrderByRelationAggregateInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorOrderByRelationAggregateInputSchema).optional(),
  votes: z.lazy(() => VoteOrderByRelationAggregateInputSchema).optional()
}).strict();

export const VestitoWhereUniqueInputSchema: z.ZodType<Prisma.VestitoWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => VestitoWhereInputSchema),z.lazy(() => VestitoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VestitoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VestitoWhereInputSchema),z.lazy(() => VestitoWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  viewCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  submissionCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  customTheme: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoListRelationFilterSchema).optional(),
  collaborators: z.lazy(() => CollaboratorListRelationFilterSchema).optional(),
  votes: z.lazy(() => VoteListRelationFilterSchema).optional()
}).strict());

export const VestitoOrderByWithAggregationInputSchema: z.ZodType<Prisma.VestitoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional(),
  customTheme: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VestitoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VestitoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VestitoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VestitoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VestitoSumOrderByAggregateInputSchema).optional()
}).strict();

export const VestitoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VestitoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VestitoScalarWhereWithAggregatesInputSchema),z.lazy(() => VestitoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VestitoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VestitoScalarWhereWithAggregatesInputSchema),z.lazy(() => VestitoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  viewCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  submissionCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  customTheme: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CollaboratorWhereInputSchema: z.ZodType<Prisma.CollaboratorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CollaboratorWhereInputSchema),z.lazy(() => CollaboratorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorWhereInputSchema),z.lazy(() => CollaboratorWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  vestito: z.union([ z.lazy(() => VestitoRelationFilterSchema),z.lazy(() => VestitoWhereInputSchema) ]).optional(),
}).strict();

export const CollaboratorOrderByWithRelationInputSchema: z.ZodType<Prisma.CollaboratorOrderByWithRelationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  vestito: z.lazy(() => VestitoOrderByWithRelationInputSchema).optional()
}).strict();

export const CollaboratorWhereUniqueInputSchema: z.ZodType<Prisma.CollaboratorWhereUniqueInput> = z.object({
  userId_vestitoId: z.lazy(() => CollaboratorUserIdVestitoIdCompoundUniqueInputSchema)
})
.and(z.object({
  userId_vestitoId: z.lazy(() => CollaboratorUserIdVestitoIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CollaboratorWhereInputSchema),z.lazy(() => CollaboratorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorWhereInputSchema),z.lazy(() => CollaboratorWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  vestito: z.union([ z.lazy(() => VestitoRelationFilterSchema),z.lazy(() => VestitoWhereInputSchema) ]).optional(),
}).strict());

export const CollaboratorOrderByWithAggregationInputSchema: z.ZodType<Prisma.CollaboratorOrderByWithAggregationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CollaboratorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CollaboratorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CollaboratorMinOrderByAggregateInputSchema).optional()
}).strict();

export const CollaboratorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CollaboratorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema),z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema),z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TessutoWhereInputSchema: z.ZodType<Prisma.TessutoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TessutoWhereInputSchema),z.lazy(() => TessutoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TessutoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TessutoWhereInputSchema),z.lazy(() => TessutoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  vestito: z.union([ z.lazy(() => VestitoRelationFilterSchema),z.lazy(() => VestitoWhereInputSchema) ]).optional(),
  trame: z.lazy(() => TramaListRelationFilterSchema).optional()
}).strict();

export const TessutoOrderByWithRelationInputSchema: z.ZodType<Prisma.TessutoOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  vestito: z.lazy(() => VestitoOrderByWithRelationInputSchema).optional(),
  trame: z.lazy(() => TramaOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TessutoWhereUniqueInputSchema: z.ZodType<Prisma.TessutoWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TessutoWhereInputSchema),z.lazy(() => TessutoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TessutoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TessutoWhereInputSchema),z.lazy(() => TessutoWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  vestito: z.union([ z.lazy(() => VestitoRelationFilterSchema),z.lazy(() => VestitoWhereInputSchema) ]).optional(),
  trame: z.lazy(() => TramaListRelationFilterSchema).optional()
}).strict());

export const TessutoOrderByWithAggregationInputSchema: z.ZodType<Prisma.TessutoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TessutoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TessutoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TessutoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TessutoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TessutoSumOrderByAggregateInputSchema).optional()
}).strict();

export const TessutoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TessutoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TessutoScalarWhereWithAggregatesInputSchema),z.lazy(() => TessutoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TessutoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TessutoScalarWhereWithAggregatesInputSchema),z.lazy(() => TessutoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TramaWhereInputSchema: z.ZodType<Prisma.TramaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TramaWhereInputSchema),z.lazy(() => TramaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TramaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TramaWhereInputSchema),z.lazy(() => TramaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tessutoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fili: z.lazy(() => FiloListRelationFilterSchema).optional(),
  tessuto: z.union([ z.lazy(() => TessutoRelationFilterSchema),z.lazy(() => TessutoWhereInputSchema) ]).optional(),
}).strict();

export const TramaOrderByWithRelationInputSchema: z.ZodType<Prisma.TramaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tessutoId: z.lazy(() => SortOrderSchema).optional(),
  fili: z.lazy(() => FiloOrderByRelationAggregateInputSchema).optional(),
  tessuto: z.lazy(() => TessutoOrderByWithRelationInputSchema).optional()
}).strict();

export const TramaWhereUniqueInputSchema: z.ZodType<Prisma.TramaWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TramaWhereInputSchema),z.lazy(() => TramaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TramaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TramaWhereInputSchema),z.lazy(() => TramaWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tessutoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fili: z.lazy(() => FiloListRelationFilterSchema).optional(),
  tessuto: z.union([ z.lazy(() => TessutoRelationFilterSchema),z.lazy(() => TessutoWhereInputSchema) ]).optional(),
}).strict());

export const TramaOrderByWithAggregationInputSchema: z.ZodType<Prisma.TramaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tessutoId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TramaCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TramaAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TramaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TramaMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TramaSumOrderByAggregateInputSchema).optional()
}).strict();

export const TramaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TramaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TramaScalarWhereWithAggregatesInputSchema),z.lazy(() => TramaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TramaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TramaScalarWhereWithAggregatesInputSchema),z.lazy(() => TramaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  tessutoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const FiloWhereInputSchema: z.ZodType<Prisma.FiloWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FiloWhereInputSchema),z.lazy(() => FiloWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FiloWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FiloWhereInputSchema),z.lazy(() => FiloWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tramaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  trama: z.union([ z.lazy(() => TramaRelationFilterSchema),z.lazy(() => TramaWhereInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraListRelationFilterSchema).optional(),
  media: z.lazy(() => MediaListRelationFilterSchema).optional(),
  responses: z.lazy(() => FormResponseListRelationFilterSchema).optional()
}).strict();

export const FiloOrderByWithRelationInputSchema: z.ZodType<Prisma.FiloOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tramaId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  trama: z.lazy(() => TramaOrderByWithRelationInputSchema).optional(),
  fibre: z.lazy(() => FibraOrderByRelationAggregateInputSchema).optional(),
  media: z.lazy(() => MediaOrderByRelationAggregateInputSchema).optional(),
  responses: z.lazy(() => FormResponseOrderByRelationAggregateInputSchema).optional()
}).strict();

export const FiloWhereUniqueInputSchema: z.ZodType<Prisma.FiloWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => FiloWhereInputSchema),z.lazy(() => FiloWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FiloWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FiloWhereInputSchema),z.lazy(() => FiloWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tramaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  trama: z.union([ z.lazy(() => TramaRelationFilterSchema),z.lazy(() => TramaWhereInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraListRelationFilterSchema).optional(),
  media: z.lazy(() => MediaListRelationFilterSchema).optional(),
  responses: z.lazy(() => FormResponseListRelationFilterSchema).optional()
}).strict());

export const FiloOrderByWithAggregationInputSchema: z.ZodType<Prisma.FiloOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tramaId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FiloCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FiloAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FiloMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FiloMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FiloSumOrderByAggregateInputSchema).optional()
}).strict();

export const FiloScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FiloScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FiloScalarWhereWithAggregatesInputSchema),z.lazy(() => FiloScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FiloScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FiloScalarWhereWithAggregatesInputSchema),z.lazy(() => FiloScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  tramaId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const FibraWhereInputSchema: z.ZodType<Prisma.FibraWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FibraWhereInputSchema),z.lazy(() => FibraWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FibraWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FibraWhereInputSchema),z.lazy(() => FibraWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  definizione: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  filo: z.union([ z.lazy(() => FiloRelationFilterSchema),z.lazy(() => FiloWhereInputSchema) ]).optional(),
}).strict();

export const FibraOrderByWithRelationInputSchema: z.ZodType<Prisma.FibraOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  definizione: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  filo: z.lazy(() => FiloOrderByWithRelationInputSchema).optional()
}).strict();

export const FibraWhereUniqueInputSchema: z.ZodType<Prisma.FibraWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => FibraWhereInputSchema),z.lazy(() => FibraWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FibraWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FibraWhereInputSchema),z.lazy(() => FibraWhereInputSchema).array() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  definizione: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  filo: z.union([ z.lazy(() => FiloRelationFilterSchema),z.lazy(() => FiloWhereInputSchema) ]).optional(),
}).strict());

export const FibraOrderByWithAggregationInputSchema: z.ZodType<Prisma.FibraOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  definizione: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FibraCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FibraMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FibraMinOrderByAggregateInputSchema).optional()
}).strict();

export const FibraScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FibraScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FibraScalarWhereWithAggregatesInputSchema),z.lazy(() => FibraScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FibraScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FibraScalarWhereWithAggregatesInputSchema),z.lazy(() => FibraScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  definizione: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NotificationWhereInputSchema: z.ZodType<Prisma.NotificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const NotificationOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const NotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MediaWhereInputSchema: z.ZodType<Prisma.MediaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MediaWhereInputSchema),z.lazy(() => MediaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaWhereInputSchema),z.lazy(() => MediaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  filoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  filo: z.union([ z.lazy(() => FiloNullableRelationFilterSchema),z.lazy(() => FiloWhereInputSchema) ]).optional().nullable(),
}).strict();

export const MediaOrderByWithRelationInputSchema: z.ZodType<Prisma.MediaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  filoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  filo: z.lazy(() => FiloOrderByWithRelationInputSchema).optional()
}).strict();

export const MediaWhereUniqueInputSchema: z.ZodType<Prisma.MediaWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => MediaWhereInputSchema),z.lazy(() => MediaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaWhereInputSchema),z.lazy(() => MediaWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  filoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  filo: z.union([ z.lazy(() => FiloNullableRelationFilterSchema),z.lazy(() => FiloWhereInputSchema) ]).optional().nullable(),
}).strict());

export const MediaOrderByWithAggregationInputSchema: z.ZodType<Prisma.MediaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  filoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MediaCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MediaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MediaMinOrderByAggregateInputSchema).optional()
}).strict();

export const MediaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MediaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MediaScalarWhereWithAggregatesInputSchema),z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaScalarWhereWithAggregatesInputSchema),z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  filoId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VoteWhereInputSchema: z.ZodType<Prisma.VoteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  vestito: z.union([ z.lazy(() => VestitoRelationFilterSchema),z.lazy(() => VestitoWhereInputSchema) ]).optional(),
}).strict();

export const VoteOrderByWithRelationInputSchema: z.ZodType<Prisma.VoteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  vestito: z.lazy(() => VestitoOrderByWithRelationInputSchema).optional()
}).strict();

export const VoteWhereUniqueInputSchema: z.ZodType<Prisma.VoteWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  vestito: z.union([ z.lazy(() => VestitoRelationFilterSchema),z.lazy(() => VestitoWhereInputSchema) ]).optional(),
}).strict());

export const VoteOrderByWithAggregationInputSchema: z.ZodType<Prisma.VoteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VoteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VoteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VoteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VoteSumOrderByAggregateInputSchema).optional()
}).strict();

export const VoteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VoteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VoteScalarWhereWithAggregatesInputSchema),z.lazy(() => VoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteScalarWhereWithAggregatesInputSchema),z.lazy(() => VoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const FormResponseWhereInputSchema: z.ZodType<Prisma.FormResponseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FormResponseWhereInputSchema),z.lazy(() => FormResponseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FormResponseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FormResponseWhereInputSchema),z.lazy(() => FormResponseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  submittedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  filo: z.union([ z.lazy(() => FiloRelationFilterSchema),z.lazy(() => FiloWhereInputSchema) ]).optional(),
}).strict();

export const FormResponseOrderByWithRelationInputSchema: z.ZodType<Prisma.FormResponseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.lazy(() => SortOrderSchema).optional(),
  filo: z.lazy(() => FiloOrderByWithRelationInputSchema).optional()
}).strict();

export const FormResponseWhereUniqueInputSchema: z.ZodType<Prisma.FormResponseWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => FormResponseWhereInputSchema),z.lazy(() => FormResponseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FormResponseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FormResponseWhereInputSchema),z.lazy(() => FormResponseWhereInputSchema).array() ]).optional(),
  filoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  submittedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  filo: z.union([ z.lazy(() => FiloRelationFilterSchema),z.lazy(() => FiloWhereInputSchema) ]).optional(),
}).strict());

export const FormResponseOrderByWithAggregationInputSchema: z.ZodType<Prisma.FormResponseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FormResponseCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FormResponseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FormResponseMinOrderByAggregateInputSchema).optional()
}).strict();

export const FormResponseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FormResponseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FormResponseScalarWhereWithAggregatesInputSchema),z.lazy(() => FormResponseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FormResponseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FormResponseScalarWhereWithAggregatesInputSchema),z.lazy(() => FormResponseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  submittedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string(),
  sid: z.string(),
  data: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string(),
  sid: z.string(),
  data: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string(),
  sid: z.string(),
  data: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImpostazioniCreateInputSchema: z.ZodType<Prisma.ImpostazioniCreateInput> = z.object({
  id: z.string().optional(),
  useGlossaryTerms: z.boolean().optional(),
  showTooltips: z.boolean().optional(),
  fontSize: z.string().optional(),
  showStatsOnLogin: z.boolean().optional(),
  notificationsEmail: z.boolean().optional(),
  contrastMode: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutImpostazioniInputSchema)
}).strict();

export const ImpostazioniUncheckedCreateInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  useGlossaryTerms: z.boolean().optional(),
  showTooltips: z.boolean().optional(),
  fontSize: z.string().optional(),
  showStatsOnLogin: z.boolean().optional(),
  notificationsEmail: z.boolean().optional(),
  contrastMode: z.boolean().optional()
}).strict();

export const ImpostazioniUpdateInputSchema: z.ZodType<Prisma.ImpostazioniUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  useGlossaryTerms: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showTooltips: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fontSize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showStatsOnLogin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsEmail: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  contrastMode: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutImpostazioniNestedInputSchema).optional()
}).strict();

export const ImpostazioniUncheckedUpdateInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  useGlossaryTerms: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showTooltips: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fontSize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showStatsOnLogin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsEmail: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  contrastMode: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImpostazioniCreateManyInputSchema: z.ZodType<Prisma.ImpostazioniCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  useGlossaryTerms: z.boolean().optional(),
  showTooltips: z.boolean().optional(),
  fontSize: z.string().optional(),
  showStatsOnLogin: z.boolean().optional(),
  notificationsEmail: z.boolean().optional(),
  contrastMode: z.boolean().optional()
}).strict();

export const ImpostazioniUpdateManyMutationInputSchema: z.ZodType<Prisma.ImpostazioniUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  useGlossaryTerms: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showTooltips: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fontSize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showStatsOnLogin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsEmail: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  contrastMode: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImpostazioniUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  useGlossaryTerms: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showTooltips: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fontSize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showStatsOnLogin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsEmail: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  contrastMode: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VestitoCreateInputSchema: z.ZodType<Prisma.VestitoCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVestitiInputSchema),
  tessuti: z.lazy(() => TessutoCreateNestedManyWithoutVestitoInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoUncheckedCreateInputSchema: z.ZodType<Prisma.VestitoUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessuti: z.lazy(() => TessutoUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoUpdateInputSchema: z.ZodType<Prisma.VestitoUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVestitiNestedInputSchema).optional(),
  tessuti: z.lazy(() => TessutoUpdateManyWithoutVestitoNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoUncheckedUpdateInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoCreateManyInputSchema: z.ZodType<Prisma.VestitoCreateManyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VestitoUpdateManyMutationInputSchema: z.ZodType<Prisma.VestitoUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VestitoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorCreateInputSchema: z.ZodType<Prisma.CollaboratorCreateInput> = z.object({
  role: z.string().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCollaboratedVestitiInputSchema),
  vestito: z.lazy(() => VestitoCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export const CollaboratorUncheckedCreateInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateInput> = z.object({
  userId: z.string(),
  vestitoId: z.string(),
  role: z.string().optional()
}).strict();

export const CollaboratorUpdateInputSchema: z.ZodType<Prisma.CollaboratorUpdateInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCollaboratedVestitiNestedInputSchema).optional(),
  vestito: z.lazy(() => VestitoUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export const CollaboratorUncheckedUpdateInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorCreateManyInputSchema: z.ZodType<Prisma.CollaboratorCreateManyInput> = z.object({
  userId: z.string(),
  vestitoId: z.string(),
  role: z.string().optional()
}).strict();

export const CollaboratorUpdateManyMutationInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyMutationInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TessutoCreateInputSchema: z.ZodType<Prisma.TessutoCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestito: z.lazy(() => VestitoCreateNestedOneWithoutTessutiInputSchema),
  trame: z.lazy(() => TramaCreateNestedManyWithoutTessutoInputSchema).optional()
}).strict();

export const TessutoUncheckedCreateInputSchema: z.ZodType<Prisma.TessutoUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  vestitoId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trame: z.lazy(() => TramaUncheckedCreateNestedManyWithoutTessutoInputSchema).optional()
}).strict();

export const TessutoUpdateInputSchema: z.ZodType<Prisma.TessutoUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestito: z.lazy(() => VestitoUpdateOneRequiredWithoutTessutiNestedInputSchema).optional(),
  trame: z.lazy(() => TramaUpdateManyWithoutTessutoNestedInputSchema).optional()
}).strict();

export const TessutoUncheckedUpdateInputSchema: z.ZodType<Prisma.TessutoUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trame: z.lazy(() => TramaUncheckedUpdateManyWithoutTessutoNestedInputSchema).optional()
}).strict();

export const TessutoCreateManyInputSchema: z.ZodType<Prisma.TessutoCreateManyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  vestitoId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TessutoUpdateManyMutationInputSchema: z.ZodType<Prisma.TessutoUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TessutoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TessutoUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TramaCreateInputSchema: z.ZodType<Prisma.TramaCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fili: z.lazy(() => FiloCreateNestedManyWithoutTramaInputSchema).optional(),
  tessuto: z.lazy(() => TessutoCreateNestedOneWithoutTrameInputSchema)
}).strict();

export const TramaUncheckedCreateInputSchema: z.ZodType<Prisma.TramaUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessutoId: z.string(),
  fili: z.lazy(() => FiloUncheckedCreateNestedManyWithoutTramaInputSchema).optional()
}).strict();

export const TramaUpdateInputSchema: z.ZodType<Prisma.TramaUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fili: z.lazy(() => FiloUpdateManyWithoutTramaNestedInputSchema).optional(),
  tessuto: z.lazy(() => TessutoUpdateOneRequiredWithoutTrameNestedInputSchema).optional()
}).strict();

export const TramaUncheckedUpdateInputSchema: z.ZodType<Prisma.TramaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessutoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fili: z.lazy(() => FiloUncheckedUpdateManyWithoutTramaNestedInputSchema).optional()
}).strict();

export const TramaCreateManyInputSchema: z.ZodType<Prisma.TramaCreateManyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessutoId: z.string()
}).strict();

export const TramaUpdateManyMutationInputSchema: z.ZodType<Prisma.TramaUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TramaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TramaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessutoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FiloCreateInputSchema: z.ZodType<Prisma.FiloCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trama: z.lazy(() => TramaCreateNestedOneWithoutFiliInputSchema),
  fibre: z.lazy(() => FibraCreateNestedManyWithoutFiloInputSchema).optional(),
  media: z.lazy(() => MediaCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloUncheckedCreateInputSchema: z.ZodType<Prisma.FiloUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  tramaId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fibre: z.lazy(() => FibraUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  media: z.lazy(() => MediaUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloUpdateInputSchema: z.ZodType<Prisma.FiloUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trama: z.lazy(() => TramaUpdateOneRequiredWithoutFiliNestedInputSchema).optional(),
  fibre: z.lazy(() => FibraUpdateManyWithoutFiloNestedInputSchema).optional(),
  media: z.lazy(() => MediaUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloUncheckedUpdateInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tramaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  media: z.lazy(() => MediaUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloCreateManyInputSchema: z.ZodType<Prisma.FiloCreateManyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  tramaId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FiloUpdateManyMutationInputSchema: z.ZodType<Prisma.FiloUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FiloUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tramaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraCreateInputSchema: z.ZodType<Prisma.FibraCreateInput> = z.object({
  id: z.string().optional(),
  nome: z.string(),
  definizione: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  filo: z.lazy(() => FiloCreateNestedOneWithoutFibreInputSchema)
}).strict();

export const FibraUncheckedCreateInputSchema: z.ZodType<Prisma.FibraUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  nome: z.string(),
  definizione: z.string().optional(),
  filoId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FibraUpdateInputSchema: z.ZodType<Prisma.FibraUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  filo: z.lazy(() => FiloUpdateOneRequiredWithoutFibreNestedInputSchema).optional()
}).strict();

export const FibraUncheckedUpdateInputSchema: z.ZodType<Prisma.FibraUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraCreateManyInputSchema: z.ZodType<Prisma.FibraCreateManyInput> = z.object({
  id: z.string().optional(),
  nome: z.string(),
  definizione: z.string().optional(),
  filoId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FibraUpdateManyMutationInputSchema: z.ZodType<Prisma.FibraUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FibraUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateInputSchema: z.ZodType<Prisma.NotificationCreateInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputSchema)
}).strict();

export const NotificationUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateManyInputSchema: z.ZodType<Prisma.NotificationCreateManyInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NotificationUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaCreateInputSchema: z.ZodType<Prisma.MediaCreateInput> = z.object({
  id: z.string().optional(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  filo: z.lazy(() => FiloCreateNestedOneWithoutMediaInputSchema).optional()
}).strict();

export const MediaUncheckedCreateInputSchema: z.ZodType<Prisma.MediaUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  filoId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaUpdateInputSchema: z.ZodType<Prisma.MediaUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  filo: z.lazy(() => FiloUpdateOneWithoutMediaNestedInputSchema).optional()
}).strict();

export const MediaUncheckedUpdateInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  filoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaCreateManyInputSchema: z.ZodType<Prisma.MediaCreateManyInput> = z.object({
  id: z.string().optional(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  filoId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaUpdateManyMutationInputSchema: z.ZodType<Prisma.MediaUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  filoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteCreateInputSchema: z.ZodType<Prisma.VoteCreateInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVoteInputSchema),
  vestito: z.lazy(() => VestitoCreateNestedOneWithoutVotesInputSchema)
}).strict();

export const VoteUncheckedCreateInputSchema: z.ZodType<Prisma.VoteUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  userId: z.string(),
  vestitoId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const VoteUpdateInputSchema: z.ZodType<Prisma.VoteUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVoteNestedInputSchema).optional(),
  vestito: z.lazy(() => VestitoUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export const VoteUncheckedUpdateInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteCreateManyInputSchema: z.ZodType<Prisma.VoteCreateManyInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  userId: z.string(),
  vestitoId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const VoteUpdateManyMutationInputSchema: z.ZodType<Prisma.VoteUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FormResponseCreateInputSchema: z.ZodType<Prisma.FormResponseCreateInput> = z.object({
  id: z.string().optional(),
  data: z.string().optional(),
  submittedAt: z.coerce.date().optional(),
  filo: z.lazy(() => FiloCreateNestedOneWithoutResponsesInputSchema)
}).strict();

export const FormResponseUncheckedCreateInputSchema: z.ZodType<Prisma.FormResponseUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  filoId: z.string(),
  data: z.string().optional(),
  submittedAt: z.coerce.date().optional()
}).strict();

export const FormResponseUpdateInputSchema: z.ZodType<Prisma.FormResponseUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  filo: z.lazy(() => FiloUpdateOneRequiredWithoutResponsesNestedInputSchema).optional()
}).strict();

export const FormResponseUncheckedUpdateInputSchema: z.ZodType<Prisma.FormResponseUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FormResponseCreateManyInputSchema: z.ZodType<Prisma.FormResponseCreateManyInput> = z.object({
  id: z.string().optional(),
  filoId: z.string(),
  data: z.string().optional(),
  submittedAt: z.coerce.date().optional()
}).strict();

export const FormResponseUpdateManyMutationInputSchema: z.ZodType<Prisma.FormResponseUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FormResponseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FormResponseUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sid: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sid: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sid: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ImpostazioniCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImpostazioniCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  useGlossaryTerms: z.lazy(() => SortOrderSchema).optional(),
  showTooltips: z.lazy(() => SortOrderSchema).optional(),
  fontSize: z.lazy(() => SortOrderSchema).optional(),
  showStatsOnLogin: z.lazy(() => SortOrderSchema).optional(),
  notificationsEmail: z.lazy(() => SortOrderSchema).optional(),
  contrastMode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImpostazioniMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImpostazioniMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  useGlossaryTerms: z.lazy(() => SortOrderSchema).optional(),
  showTooltips: z.lazy(() => SortOrderSchema).optional(),
  fontSize: z.lazy(() => SortOrderSchema).optional(),
  showStatsOnLogin: z.lazy(() => SortOrderSchema).optional(),
  notificationsEmail: z.lazy(() => SortOrderSchema).optional(),
  contrastMode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImpostazioniMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImpostazioniMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  useGlossaryTerms: z.lazy(() => SortOrderSchema).optional(),
  showTooltips: z.lazy(() => SortOrderSchema).optional(),
  fontSize: z.lazy(() => SortOrderSchema).optional(),
  showStatsOnLogin: z.lazy(() => SortOrderSchema).optional(),
  notificationsEmail: z.lazy(() => SortOrderSchema).optional(),
  contrastMode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const VestitoListRelationFilterSchema: z.ZodType<Prisma.VestitoListRelationFilter> = z.object({
  every: z.lazy(() => VestitoWhereInputSchema).optional(),
  some: z.lazy(() => VestitoWhereInputSchema).optional(),
  none: z.lazy(() => VestitoWhereInputSchema).optional()
}).strict();

export const CollaboratorListRelationFilterSchema: z.ZodType<Prisma.CollaboratorListRelationFilter> = z.object({
  every: z.lazy(() => CollaboratorWhereInputSchema).optional(),
  some: z.lazy(() => CollaboratorWhereInputSchema).optional(),
  none: z.lazy(() => CollaboratorWhereInputSchema).optional()
}).strict();

export const NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationListRelationFilter> = z.object({
  every: z.lazy(() => NotificationWhereInputSchema).optional(),
  some: z.lazy(() => NotificationWhereInputSchema).optional(),
  none: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const VoteListRelationFilterSchema: z.ZodType<Prisma.VoteListRelationFilter> = z.object({
  every: z.lazy(() => VoteWhereInputSchema).optional(),
  some: z.lazy(() => VoteWhereInputSchema).optional(),
  none: z.lazy(() => VoteWhereInputSchema).optional()
}).strict();

export const ImpostazioniNullableRelationFilterSchema: z.ZodType<Prisma.ImpostazioniNullableRelationFilter> = z.object({
  is: z.lazy(() => ImpostazioniWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ImpostazioniWhereInputSchema).optional().nullable()
}).strict();

export const VestitoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VestitoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollaboratorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CollaboratorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VoteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cognome: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cognome: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cognome: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const TessutoListRelationFilterSchema: z.ZodType<Prisma.TessutoListRelationFilter> = z.object({
  every: z.lazy(() => TessutoWhereInputSchema).optional(),
  some: z.lazy(() => TessutoWhereInputSchema).optional(),
  none: z.lazy(() => TessutoWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const TessutoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TessutoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VestitoCountOrderByAggregateInputSchema: z.ZodType<Prisma.VestitoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional(),
  customTheme: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VestitoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VestitoAvgOrderByAggregateInput> = z.object({
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VestitoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VestitoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional(),
  customTheme: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VestitoMinOrderByAggregateInputSchema: z.ZodType<Prisma.VestitoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional(),
  customTheme: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VestitoSumOrderByAggregateInputSchema: z.ZodType<Prisma.VestitoSumOrderByAggregateInput> = z.object({
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  submissionCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const VestitoRelationFilterSchema: z.ZodType<Prisma.VestitoRelationFilter> = z.object({
  is: z.lazy(() => VestitoWhereInputSchema).optional(),
  isNot: z.lazy(() => VestitoWhereInputSchema).optional()
}).strict();

export const CollaboratorUserIdVestitoIdCompoundUniqueInputSchema: z.ZodType<Prisma.CollaboratorUserIdVestitoIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  vestitoId: z.string()
}).strict();

export const CollaboratorCountOrderByAggregateInputSchema: z.ZodType<Prisma.CollaboratorCountOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollaboratorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CollaboratorMaxOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollaboratorMinOrderByAggregateInputSchema: z.ZodType<Prisma.CollaboratorMinOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaListRelationFilterSchema: z.ZodType<Prisma.TramaListRelationFilter> = z.object({
  every: z.lazy(() => TramaWhereInputSchema).optional(),
  some: z.lazy(() => TramaWhereInputSchema).optional(),
  none: z.lazy(() => TramaWhereInputSchema).optional()
}).strict();

export const TramaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TramaOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TessutoCountOrderByAggregateInputSchema: z.ZodType<Prisma.TessutoCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TessutoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TessutoAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TessutoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TessutoMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TessutoMinOrderByAggregateInputSchema: z.ZodType<Prisma.TessutoMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TessutoSumOrderByAggregateInputSchema: z.ZodType<Prisma.TessutoSumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloListRelationFilterSchema: z.ZodType<Prisma.FiloListRelationFilter> = z.object({
  every: z.lazy(() => FiloWhereInputSchema).optional(),
  some: z.lazy(() => FiloWhereInputSchema).optional(),
  none: z.lazy(() => FiloWhereInputSchema).optional()
}).strict();

export const TessutoRelationFilterSchema: z.ZodType<Prisma.TessutoRelationFilter> = z.object({
  is: z.lazy(() => TessutoWhereInputSchema).optional(),
  isNot: z.lazy(() => TessutoWhereInputSchema).optional()
}).strict();

export const FiloOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FiloOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaCountOrderByAggregateInputSchema: z.ZodType<Prisma.TramaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tessutoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TramaAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TramaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tessutoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaMinOrderByAggregateInputSchema: z.ZodType<Prisma.TramaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tessutoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaSumOrderByAggregateInputSchema: z.ZodType<Prisma.TramaSumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TramaRelationFilterSchema: z.ZodType<Prisma.TramaRelationFilter> = z.object({
  is: z.lazy(() => TramaWhereInputSchema).optional(),
  isNot: z.lazy(() => TramaWhereInputSchema).optional()
}).strict();

export const FibraListRelationFilterSchema: z.ZodType<Prisma.FibraListRelationFilter> = z.object({
  every: z.lazy(() => FibraWhereInputSchema).optional(),
  some: z.lazy(() => FibraWhereInputSchema).optional(),
  none: z.lazy(() => FibraWhereInputSchema).optional()
}).strict();

export const MediaListRelationFilterSchema: z.ZodType<Prisma.MediaListRelationFilter> = z.object({
  every: z.lazy(() => MediaWhereInputSchema).optional(),
  some: z.lazy(() => MediaWhereInputSchema).optional(),
  none: z.lazy(() => MediaWhereInputSchema).optional()
}).strict();

export const FormResponseListRelationFilterSchema: z.ZodType<Prisma.FormResponseListRelationFilter> = z.object({
  every: z.lazy(() => FormResponseWhereInputSchema).optional(),
  some: z.lazy(() => FormResponseWhereInputSchema).optional(),
  none: z.lazy(() => FormResponseWhereInputSchema).optional()
}).strict();

export const FibraOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FibraOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MediaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MediaOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FormResponseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FormResponseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloCountOrderByAggregateInputSchema: z.ZodType<Prisma.FiloCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  tramaId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FiloAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FiloMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  tramaId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloMinOrderByAggregateInputSchema: z.ZodType<Prisma.FiloMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  tramaId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloSumOrderByAggregateInputSchema: z.ZodType<Prisma.FiloSumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloRelationFilterSchema: z.ZodType<Prisma.FiloRelationFilter> = z.object({
  is: z.lazy(() => FiloWhereInputSchema).optional(),
  isNot: z.lazy(() => FiloWhereInputSchema).optional()
}).strict();

export const FibraCountOrderByAggregateInputSchema: z.ZodType<Prisma.FibraCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  definizione: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FibraMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FibraMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  definizione: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FibraMinOrderByAggregateInputSchema: z.ZodType<Prisma.FibraMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  definizione: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FiloNullableRelationFilterSchema: z.ZodType<Prisma.FiloNullableRelationFilter> = z.object({
  is: z.lazy(() => FiloWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FiloWhereInputSchema).optional().nullable()
}).strict();

export const MediaCountOrderByAggregateInputSchema: z.ZodType<Prisma.MediaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MediaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MediaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MediaMinOrderByAggregateInputSchema: z.ZodType<Prisma.MediaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoteCountOrderByAggregateInputSchema: z.ZodType<Prisma.VoteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoteAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VoteAvgOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VoteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoteMinOrderByAggregateInputSchema: z.ZodType<Prisma.VoteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  vestitoId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoteSumOrderByAggregateInputSchema: z.ZodType<Prisma.VoteSumOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FormResponseCountOrderByAggregateInputSchema: z.ZodType<Prisma.FormResponseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FormResponseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FormResponseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FormResponseMinOrderByAggregateInputSchema: z.ZodType<Prisma.FormResponseMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filoId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserCreateNestedOneWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutImpostazioniInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedCreateWithoutImpostazioniInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutImpostazioniInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const UserUpdateOneRequiredWithoutImpostazioniNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutImpostazioniNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedCreateWithoutImpostazioniInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutImpostazioniInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutImpostazioniInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutImpostazioniInputSchema),z.lazy(() => UserUpdateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedUpdateWithoutImpostazioniInputSchema) ]).optional(),
}).strict();

export const VestitoCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VestitoCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutUserInputSchema),z.lazy(() => VestitoCreateWithoutUserInputSchema).array(),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema),z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VestitoCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorCreateWithoutUserInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoteCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VoteCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteCreateWithoutUserInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ImpostazioniCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ImpostazioniCreateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImpostazioniCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ImpostazioniWhereUniqueInputSchema).optional()
}).strict();

export const VestitoUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VestitoUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutUserInputSchema),z.lazy(() => VestitoCreateWithoutUserInputSchema).array(),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema),z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VestitoCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorCreateWithoutUserInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoteUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VoteUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteCreateWithoutUserInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ImpostazioniUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ImpostazioniCreateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImpostazioniCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ImpostazioniWhereUniqueInputSchema).optional()
}).strict();

export const VestitoUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VestitoUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutUserInputSchema),z.lazy(() => VestitoCreateWithoutUserInputSchema).array(),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema),z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VestitoUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VestitoUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VestitoCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VestitoUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VestitoUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VestitoUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VestitoUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VestitoScalarWhereInputSchema),z.lazy(() => VestitoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorCreateWithoutUserInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoteUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VoteUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteCreateWithoutUserInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ImpostazioniUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ImpostazioniUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImpostazioniCreateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImpostazioniCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ImpostazioniUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImpostazioniWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImpostazioniWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImpostazioniWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImpostazioniUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ImpostazioniUpdateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const VestitoUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutUserInputSchema),z.lazy(() => VestitoCreateWithoutUserInputSchema).array(),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema),z.lazy(() => VestitoCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VestitoUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VestitoUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VestitoCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VestitoWhereUniqueInputSchema),z.lazy(() => VestitoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VestitoUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VestitoUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VestitoUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VestitoUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VestitoScalarWhereInputSchema),z.lazy(() => VestitoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorCreateWithoutUserInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoteUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteCreateWithoutUserInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ImpostazioniUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImpostazioniCreateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImpostazioniCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ImpostazioniUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImpostazioniWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImpostazioniWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImpostazioniWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImpostazioniUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ImpostazioniUpdateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutVestitiInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutVestitiInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutVestitiInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVestitiInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TessutoCreateNestedManyWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoCreateNestedManyWithoutVestitoInput> = z.object({
  create: z.union([ z.lazy(() => TessutoCreateWithoutVestitoInputSchema),z.lazy(() => TessutoCreateWithoutVestitoInputSchema).array(),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TessutoCreateManyVestitoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorCreateNestedManyWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorCreateNestedManyWithoutVestitoInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyVestitoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoteCreateNestedManyWithoutVestitoInputSchema: z.ZodType<Prisma.VoteCreateNestedManyWithoutVestitoInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutVestitoInputSchema),z.lazy(() => VoteCreateWithoutVestitoInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyVestitoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TessutoUncheckedCreateNestedManyWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUncheckedCreateNestedManyWithoutVestitoInput> = z.object({
  create: z.union([ z.lazy(() => TessutoCreateWithoutVestitoInputSchema),z.lazy(() => TessutoCreateWithoutVestitoInputSchema).array(),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TessutoCreateManyVestitoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorUncheckedCreateNestedManyWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutVestitoInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyVestitoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoteUncheckedCreateNestedManyWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUncheckedCreateNestedManyWithoutVestitoInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutVestitoInputSchema),z.lazy(() => VoteCreateWithoutVestitoInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyVestitoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutVestitiNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVestitiNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutVestitiInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVestitiInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVestitiInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutVestitiInputSchema),z.lazy(() => UserUpdateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVestitiInputSchema) ]).optional(),
}).strict();

export const TessutoUpdateManyWithoutVestitoNestedInputSchema: z.ZodType<Prisma.TessutoUpdateManyWithoutVestitoNestedInput> = z.object({
  create: z.union([ z.lazy(() => TessutoCreateWithoutVestitoInputSchema),z.lazy(() => TessutoCreateWithoutVestitoInputSchema).array(),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TessutoUpsertWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => TessutoUpsertWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TessutoCreateManyVestitoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TessutoUpdateWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => TessutoUpdateWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TessutoUpdateManyWithWhereWithoutVestitoInputSchema),z.lazy(() => TessutoUpdateManyWithWhereWithoutVestitoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TessutoScalarWhereInputSchema),z.lazy(() => TessutoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorUpdateManyWithoutVestitoNestedInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithoutVestitoNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyVestitoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollaboratorUpdateManyWithWhereWithoutVestitoInputSchema),z.lazy(() => CollaboratorUpdateManyWithWhereWithoutVestitoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoteUpdateManyWithoutVestitoNestedInputSchema: z.ZodType<Prisma.VoteUpdateManyWithoutVestitoNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutVestitoInputSchema),z.lazy(() => VoteCreateWithoutVestitoInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoteUpsertWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => VoteUpsertWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyVestitoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoteUpdateWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => VoteUpdateWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoteUpdateManyWithWhereWithoutVestitoInputSchema),z.lazy(() => VoteUpdateManyWithWhereWithoutVestitoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TessutoUncheckedUpdateManyWithoutVestitoNestedInputSchema: z.ZodType<Prisma.TessutoUncheckedUpdateManyWithoutVestitoNestedInput> = z.object({
  create: z.union([ z.lazy(() => TessutoCreateWithoutVestitoInputSchema),z.lazy(() => TessutoCreateWithoutVestitoInputSchema).array(),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => TessutoCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TessutoUpsertWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => TessutoUpsertWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TessutoCreateManyVestitoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TessutoWhereUniqueInputSchema),z.lazy(() => TessutoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TessutoUpdateWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => TessutoUpdateWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TessutoUpdateManyWithWhereWithoutVestitoInputSchema),z.lazy(() => TessutoUpdateManyWithWhereWithoutVestitoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TessutoScalarWhereInputSchema),z.lazy(() => TessutoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CollaboratorUncheckedUpdateManyWithoutVestitoNestedInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutVestitoNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyVestitoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollaboratorUpdateManyWithWhereWithoutVestitoInputSchema),z.lazy(() => CollaboratorUpdateManyWithWhereWithoutVestitoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoteUncheckedUpdateManyWithoutVestitoNestedInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutVestitoNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutVestitoInputSchema),z.lazy(() => VoteCreateWithoutVestitoInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema),z.lazy(() => VoteCreateOrConnectWithoutVestitoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoteUpsertWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => VoteUpsertWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyVestitoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoteUpdateWithWhereUniqueWithoutVestitoInputSchema),z.lazy(() => VoteUpdateWithWhereUniqueWithoutVestitoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoteUpdateManyWithWhereWithoutVestitoInputSchema),z.lazy(() => VoteUpdateManyWithWhereWithoutVestitoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCollaboratedVestitiInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratedVestitiInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCollaboratedVestitiInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const VestitoCreateNestedOneWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoCreateNestedOneWithoutCollaboratorsInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VestitoCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => VestitoWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutCollaboratedVestitiNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCollaboratedVestitiNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratedVestitiInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCollaboratedVestitiInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCollaboratedVestitiInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUpdateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollaboratedVestitiInputSchema) ]).optional(),
}).strict();

export const VestitoUpdateOneRequiredWithoutCollaboratorsNestedInputSchema: z.ZodType<Prisma.VestitoUpdateOneRequiredWithoutCollaboratorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VestitoCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  upsert: z.lazy(() => VestitoUpsertWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => VestitoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VestitoUpdateToOneWithWhereWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUpdateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutCollaboratorsInputSchema) ]).optional(),
}).strict();

export const VestitoCreateNestedOneWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoCreateNestedOneWithoutTessutiInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutTessutiInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VestitoCreateOrConnectWithoutTessutiInputSchema).optional(),
  connect: z.lazy(() => VestitoWhereUniqueInputSchema).optional()
}).strict();

export const TramaCreateNestedManyWithoutTessutoInputSchema: z.ZodType<Prisma.TramaCreateNestedManyWithoutTessutoInput> = z.object({
  create: z.union([ z.lazy(() => TramaCreateWithoutTessutoInputSchema),z.lazy(() => TramaCreateWithoutTessutoInputSchema).array(),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema),z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TramaCreateManyTessutoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TramaUncheckedCreateNestedManyWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUncheckedCreateNestedManyWithoutTessutoInput> = z.object({
  create: z.union([ z.lazy(() => TramaCreateWithoutTessutoInputSchema),z.lazy(() => TramaCreateWithoutTessutoInputSchema).array(),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema),z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TramaCreateManyTessutoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VestitoUpdateOneRequiredWithoutTessutiNestedInputSchema: z.ZodType<Prisma.VestitoUpdateOneRequiredWithoutTessutiNestedInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutTessutiInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VestitoCreateOrConnectWithoutTessutiInputSchema).optional(),
  upsert: z.lazy(() => VestitoUpsertWithoutTessutiInputSchema).optional(),
  connect: z.lazy(() => VestitoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VestitoUpdateToOneWithWhereWithoutTessutiInputSchema),z.lazy(() => VestitoUpdateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutTessutiInputSchema) ]).optional(),
}).strict();

export const TramaUpdateManyWithoutTessutoNestedInputSchema: z.ZodType<Prisma.TramaUpdateManyWithoutTessutoNestedInput> = z.object({
  create: z.union([ z.lazy(() => TramaCreateWithoutTessutoInputSchema),z.lazy(() => TramaCreateWithoutTessutoInputSchema).array(),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema),z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TramaUpsertWithWhereUniqueWithoutTessutoInputSchema),z.lazy(() => TramaUpsertWithWhereUniqueWithoutTessutoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TramaCreateManyTessutoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TramaUpdateWithWhereUniqueWithoutTessutoInputSchema),z.lazy(() => TramaUpdateWithWhereUniqueWithoutTessutoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TramaUpdateManyWithWhereWithoutTessutoInputSchema),z.lazy(() => TramaUpdateManyWithWhereWithoutTessutoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TramaScalarWhereInputSchema),z.lazy(() => TramaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TramaUncheckedUpdateManyWithoutTessutoNestedInputSchema: z.ZodType<Prisma.TramaUncheckedUpdateManyWithoutTessutoNestedInput> = z.object({
  create: z.union([ z.lazy(() => TramaCreateWithoutTessutoInputSchema),z.lazy(() => TramaCreateWithoutTessutoInputSchema).array(),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema),z.lazy(() => TramaCreateOrConnectWithoutTessutoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TramaUpsertWithWhereUniqueWithoutTessutoInputSchema),z.lazy(() => TramaUpsertWithWhereUniqueWithoutTessutoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TramaCreateManyTessutoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TramaWhereUniqueInputSchema),z.lazy(() => TramaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TramaUpdateWithWhereUniqueWithoutTessutoInputSchema),z.lazy(() => TramaUpdateWithWhereUniqueWithoutTessutoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TramaUpdateManyWithWhereWithoutTessutoInputSchema),z.lazy(() => TramaUpdateManyWithWhereWithoutTessutoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TramaScalarWhereInputSchema),z.lazy(() => TramaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FiloCreateNestedManyWithoutTramaInputSchema: z.ZodType<Prisma.FiloCreateNestedManyWithoutTramaInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutTramaInputSchema),z.lazy(() => FiloCreateWithoutTramaInputSchema).array(),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema),z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FiloCreateManyTramaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TessutoCreateNestedOneWithoutTrameInputSchema: z.ZodType<Prisma.TessutoCreateNestedOneWithoutTrameInput> = z.object({
  create: z.union([ z.lazy(() => TessutoCreateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutTrameInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TessutoCreateOrConnectWithoutTrameInputSchema).optional(),
  connect: z.lazy(() => TessutoWhereUniqueInputSchema).optional()
}).strict();

export const FiloUncheckedCreateNestedManyWithoutTramaInputSchema: z.ZodType<Prisma.FiloUncheckedCreateNestedManyWithoutTramaInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutTramaInputSchema),z.lazy(() => FiloCreateWithoutTramaInputSchema).array(),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema),z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FiloCreateManyTramaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FiloUpdateManyWithoutTramaNestedInputSchema: z.ZodType<Prisma.FiloUpdateManyWithoutTramaNestedInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutTramaInputSchema),z.lazy(() => FiloCreateWithoutTramaInputSchema).array(),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema),z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FiloUpsertWithWhereUniqueWithoutTramaInputSchema),z.lazy(() => FiloUpsertWithWhereUniqueWithoutTramaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FiloCreateManyTramaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FiloUpdateWithWhereUniqueWithoutTramaInputSchema),z.lazy(() => FiloUpdateWithWhereUniqueWithoutTramaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FiloUpdateManyWithWhereWithoutTramaInputSchema),z.lazy(() => FiloUpdateManyWithWhereWithoutTramaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FiloScalarWhereInputSchema),z.lazy(() => FiloScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TessutoUpdateOneRequiredWithoutTrameNestedInputSchema: z.ZodType<Prisma.TessutoUpdateOneRequiredWithoutTrameNestedInput> = z.object({
  create: z.union([ z.lazy(() => TessutoCreateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutTrameInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TessutoCreateOrConnectWithoutTrameInputSchema).optional(),
  upsert: z.lazy(() => TessutoUpsertWithoutTrameInputSchema).optional(),
  connect: z.lazy(() => TessutoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TessutoUpdateToOneWithWhereWithoutTrameInputSchema),z.lazy(() => TessutoUpdateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedUpdateWithoutTrameInputSchema) ]).optional(),
}).strict();

export const FiloUncheckedUpdateManyWithoutTramaNestedInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateManyWithoutTramaNestedInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutTramaInputSchema),z.lazy(() => FiloCreateWithoutTramaInputSchema).array(),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema),z.lazy(() => FiloCreateOrConnectWithoutTramaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FiloUpsertWithWhereUniqueWithoutTramaInputSchema),z.lazy(() => FiloUpsertWithWhereUniqueWithoutTramaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FiloCreateManyTramaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FiloWhereUniqueInputSchema),z.lazy(() => FiloWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FiloUpdateWithWhereUniqueWithoutTramaInputSchema),z.lazy(() => FiloUpdateWithWhereUniqueWithoutTramaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FiloUpdateManyWithWhereWithoutTramaInputSchema),z.lazy(() => FiloUpdateManyWithWhereWithoutTramaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FiloScalarWhereInputSchema),z.lazy(() => FiloScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TramaCreateNestedOneWithoutFiliInputSchema: z.ZodType<Prisma.TramaCreateNestedOneWithoutFiliInput> = z.object({
  create: z.union([ z.lazy(() => TramaCreateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedCreateWithoutFiliInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TramaCreateOrConnectWithoutFiliInputSchema).optional(),
  connect: z.lazy(() => TramaWhereUniqueInputSchema).optional()
}).strict();

export const FibraCreateNestedManyWithoutFiloInputSchema: z.ZodType<Prisma.FibraCreateNestedManyWithoutFiloInput> = z.object({
  create: z.union([ z.lazy(() => FibraCreateWithoutFiloInputSchema),z.lazy(() => FibraCreateWithoutFiloInputSchema).array(),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FibraCreateManyFiloInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MediaCreateNestedManyWithoutFiloInputSchema: z.ZodType<Prisma.MediaCreateNestedManyWithoutFiloInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutFiloInputSchema),z.lazy(() => MediaCreateWithoutFiloInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema),z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyFiloInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FormResponseCreateNestedManyWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseCreateNestedManyWithoutFiloInput> = z.object({
  create: z.union([ z.lazy(() => FormResponseCreateWithoutFiloInputSchema),z.lazy(() => FormResponseCreateWithoutFiloInputSchema).array(),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FormResponseCreateManyFiloInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FibraUncheckedCreateNestedManyWithoutFiloInputSchema: z.ZodType<Prisma.FibraUncheckedCreateNestedManyWithoutFiloInput> = z.object({
  create: z.union([ z.lazy(() => FibraCreateWithoutFiloInputSchema),z.lazy(() => FibraCreateWithoutFiloInputSchema).array(),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FibraCreateManyFiloInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MediaUncheckedCreateNestedManyWithoutFiloInputSchema: z.ZodType<Prisma.MediaUncheckedCreateNestedManyWithoutFiloInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutFiloInputSchema),z.lazy(() => MediaCreateWithoutFiloInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema),z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyFiloInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FormResponseUncheckedCreateNestedManyWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUncheckedCreateNestedManyWithoutFiloInput> = z.object({
  create: z.union([ z.lazy(() => FormResponseCreateWithoutFiloInputSchema),z.lazy(() => FormResponseCreateWithoutFiloInputSchema).array(),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FormResponseCreateManyFiloInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TramaUpdateOneRequiredWithoutFiliNestedInputSchema: z.ZodType<Prisma.TramaUpdateOneRequiredWithoutFiliNestedInput> = z.object({
  create: z.union([ z.lazy(() => TramaCreateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedCreateWithoutFiliInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TramaCreateOrConnectWithoutFiliInputSchema).optional(),
  upsert: z.lazy(() => TramaUpsertWithoutFiliInputSchema).optional(),
  connect: z.lazy(() => TramaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TramaUpdateToOneWithWhereWithoutFiliInputSchema),z.lazy(() => TramaUpdateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedUpdateWithoutFiliInputSchema) ]).optional(),
}).strict();

export const FibraUpdateManyWithoutFiloNestedInputSchema: z.ZodType<Prisma.FibraUpdateManyWithoutFiloNestedInput> = z.object({
  create: z.union([ z.lazy(() => FibraCreateWithoutFiloInputSchema),z.lazy(() => FibraCreateWithoutFiloInputSchema).array(),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FibraUpsertWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FibraUpsertWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FibraCreateManyFiloInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FibraUpdateWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FibraUpdateWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FibraUpdateManyWithWhereWithoutFiloInputSchema),z.lazy(() => FibraUpdateManyWithWhereWithoutFiloInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FibraScalarWhereInputSchema),z.lazy(() => FibraScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MediaUpdateManyWithoutFiloNestedInputSchema: z.ZodType<Prisma.MediaUpdateManyWithoutFiloNestedInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutFiloInputSchema),z.lazy(() => MediaCreateWithoutFiloInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema),z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MediaUpsertWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => MediaUpsertWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyFiloInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MediaUpdateWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => MediaUpdateWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MediaUpdateManyWithWhereWithoutFiloInputSchema),z.lazy(() => MediaUpdateManyWithWhereWithoutFiloInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FormResponseUpdateManyWithoutFiloNestedInputSchema: z.ZodType<Prisma.FormResponseUpdateManyWithoutFiloNestedInput> = z.object({
  create: z.union([ z.lazy(() => FormResponseCreateWithoutFiloInputSchema),z.lazy(() => FormResponseCreateWithoutFiloInputSchema).array(),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FormResponseUpsertWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FormResponseUpsertWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FormResponseCreateManyFiloInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FormResponseUpdateWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FormResponseUpdateWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FormResponseUpdateManyWithWhereWithoutFiloInputSchema),z.lazy(() => FormResponseUpdateManyWithWhereWithoutFiloInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FormResponseScalarWhereInputSchema),z.lazy(() => FormResponseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FibraUncheckedUpdateManyWithoutFiloNestedInputSchema: z.ZodType<Prisma.FibraUncheckedUpdateManyWithoutFiloNestedInput> = z.object({
  create: z.union([ z.lazy(() => FibraCreateWithoutFiloInputSchema),z.lazy(() => FibraCreateWithoutFiloInputSchema).array(),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FibraCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FibraUpsertWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FibraUpsertWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FibraCreateManyFiloInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FibraWhereUniqueInputSchema),z.lazy(() => FibraWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FibraUpdateWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FibraUpdateWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FibraUpdateManyWithWhereWithoutFiloInputSchema),z.lazy(() => FibraUpdateManyWithWhereWithoutFiloInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FibraScalarWhereInputSchema),z.lazy(() => FibraScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MediaUncheckedUpdateManyWithoutFiloNestedInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutFiloNestedInput> = z.object({
  create: z.union([ z.lazy(() => MediaCreateWithoutFiloInputSchema),z.lazy(() => MediaCreateWithoutFiloInputSchema).array(),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema),z.lazy(() => MediaCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MediaUpsertWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => MediaUpsertWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MediaCreateManyFiloInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MediaWhereUniqueInputSchema),z.lazy(() => MediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MediaUpdateWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => MediaUpdateWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MediaUpdateManyWithWhereWithoutFiloInputSchema),z.lazy(() => MediaUpdateManyWithWhereWithoutFiloInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FormResponseUncheckedUpdateManyWithoutFiloNestedInputSchema: z.ZodType<Prisma.FormResponseUncheckedUpdateManyWithoutFiloNestedInput> = z.object({
  create: z.union([ z.lazy(() => FormResponseCreateWithoutFiloInputSchema),z.lazy(() => FormResponseCreateWithoutFiloInputSchema).array(),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema),z.lazy(() => FormResponseCreateOrConnectWithoutFiloInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FormResponseUpsertWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FormResponseUpsertWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FormResponseCreateManyFiloInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FormResponseWhereUniqueInputSchema),z.lazy(() => FormResponseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FormResponseUpdateWithWhereUniqueWithoutFiloInputSchema),z.lazy(() => FormResponseUpdateWithWhereUniqueWithoutFiloInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FormResponseUpdateManyWithWhereWithoutFiloInputSchema),z.lazy(() => FormResponseUpdateManyWithWhereWithoutFiloInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FormResponseScalarWhereInputSchema),z.lazy(() => FormResponseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FiloCreateNestedOneWithoutFibreInputSchema: z.ZodType<Prisma.FiloCreateNestedOneWithoutFibreInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedCreateWithoutFibreInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FiloCreateOrConnectWithoutFibreInputSchema).optional(),
  connect: z.lazy(() => FiloWhereUniqueInputSchema).optional()
}).strict();

export const FiloUpdateOneRequiredWithoutFibreNestedInputSchema: z.ZodType<Prisma.FiloUpdateOneRequiredWithoutFibreNestedInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedCreateWithoutFibreInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FiloCreateOrConnectWithoutFibreInputSchema).optional(),
  upsert: z.lazy(() => FiloUpsertWithoutFibreInputSchema).optional(),
  connect: z.lazy(() => FiloWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FiloUpdateToOneWithWhereWithoutFibreInputSchema),z.lazy(() => FiloUpdateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutFibreInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationsInputSchema),z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
}).strict();

export const FiloCreateNestedOneWithoutMediaInputSchema: z.ZodType<Prisma.FiloCreateNestedOneWithoutMediaInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutMediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FiloCreateOrConnectWithoutMediaInputSchema).optional(),
  connect: z.lazy(() => FiloWhereUniqueInputSchema).optional()
}).strict();

export const FiloUpdateOneWithoutMediaNestedInputSchema: z.ZodType<Prisma.FiloUpdateOneWithoutMediaNestedInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutMediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FiloCreateOrConnectWithoutMediaInputSchema).optional(),
  upsert: z.lazy(() => FiloUpsertWithoutMediaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FiloWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FiloWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FiloWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FiloUpdateToOneWithWhereWithoutMediaInputSchema),z.lazy(() => FiloUpdateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutMediaInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutVoteInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutVoteInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVoteInputSchema),z.lazy(() => UserUncheckedCreateWithoutVoteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVoteInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const VestitoCreateNestedOneWithoutVotesInputSchema: z.ZodType<Prisma.VestitoCreateNestedOneWithoutVotesInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VestitoCreateOrConnectWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => VestitoWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutVoteNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVoteNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVoteInputSchema),z.lazy(() => UserUncheckedCreateWithoutVoteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVoteInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVoteInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutVoteInputSchema),z.lazy(() => UserUpdateWithoutVoteInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVoteInputSchema) ]).optional(),
}).strict();

export const VestitoUpdateOneRequiredWithoutVotesNestedInputSchema: z.ZodType<Prisma.VestitoUpdateOneRequiredWithoutVotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => VestitoCreateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VestitoCreateOrConnectWithoutVotesInputSchema).optional(),
  upsert: z.lazy(() => VestitoUpsertWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => VestitoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VestitoUpdateToOneWithWhereWithoutVotesInputSchema),z.lazy(() => VestitoUpdateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutVotesInputSchema) ]).optional(),
}).strict();

export const FiloCreateNestedOneWithoutResponsesInputSchema: z.ZodType<Prisma.FiloCreateNestedOneWithoutResponsesInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FiloCreateOrConnectWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => FiloWhereUniqueInputSchema).optional()
}).strict();

export const FiloUpdateOneRequiredWithoutResponsesNestedInputSchema: z.ZodType<Prisma.FiloUpdateOneRequiredWithoutResponsesNestedInput> = z.object({
  create: z.union([ z.lazy(() => FiloCreateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FiloCreateOrConnectWithoutResponsesInputSchema).optional(),
  upsert: z.lazy(() => FiloUpsertWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => FiloWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FiloUpdateToOneWithWhereWithoutResponsesInputSchema),z.lazy(() => FiloUpdateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutResponsesInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const UserCreateWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserCreateWithoutImpostazioniInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutImpostazioniInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutImpostazioniInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedCreateWithoutImpostazioniInputSchema) ]),
}).strict();

export const UserUpsertWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserUpsertWithoutImpostazioniInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedUpdateWithoutImpostazioniInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedCreateWithoutImpostazioniInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutImpostazioniInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutImpostazioniInputSchema),z.lazy(() => UserUncheckedUpdateWithoutImpostazioniInputSchema) ]),
}).strict();

export const UserUpdateWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserUpdateWithoutImpostazioniInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutImpostazioniInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutImpostazioniInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const VestitoCreateWithoutUserInputSchema: z.ZodType<Prisma.VestitoCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessuti: z.lazy(() => TessutoCreateNestedManyWithoutVestitoInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.VestitoUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessuti: z.lazy(() => TessutoUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.VestitoCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => VestitoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VestitoCreateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VestitoCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.VestitoCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VestitoCreateManyUserInputSchema),z.lazy(() => VestitoCreateManyUserInputSchema).array() ]),
}).strict();

export const CollaboratorCreateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorCreateWithoutUserInput> = z.object({
  role: z.string().optional(),
  vestito: z.lazy(() => VestitoCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export const CollaboratorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutUserInput> = z.object({
  vestitoId: z.string(),
  role: z.string().optional()
}).strict();

export const CollaboratorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CollaboratorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CollaboratorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CollaboratorCreateManyUserInputSchema),z.lazy(() => CollaboratorCreateManyUserInputSchema).array() ]),
}).strict();

export const NotificationCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NotificationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NotificationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NotificationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyUserInputSchema),z.lazy(() => NotificationCreateManyUserInputSchema).array() ]),
}).strict();

export const VoteCreateWithoutUserInputSchema: z.ZodType<Prisma.VoteCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  createdAt: z.coerce.date().optional(),
  vestito: z.lazy(() => VestitoCreateNestedOneWithoutVotesInputSchema)
}).strict();

export const VoteUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.VoteUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  vestitoId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const VoteCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VoteCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.VoteCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VoteCreateManyUserInputSchema),z.lazy(() => VoteCreateManyUserInputSchema).array() ]),
}).strict();

export const ImpostazioniCreateWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  useGlossaryTerms: z.boolean().optional(),
  showTooltips: z.boolean().optional(),
  fontSize: z.string().optional(),
  showStatsOnLogin: z.boolean().optional(),
  notificationsEmail: z.boolean().optional(),
  contrastMode: z.boolean().optional()
}).strict();

export const ImpostazioniUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  useGlossaryTerms: z.boolean().optional(),
  showTooltips: z.boolean().optional(),
  fontSize: z.string().optional(),
  showStatsOnLogin: z.boolean().optional(),
  notificationsEmail: z.boolean().optional(),
  contrastMode: z.boolean().optional()
}).strict();

export const ImpostazioniCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ImpostazioniWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImpostazioniCreateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VestitoUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VestitoUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VestitoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VestitoUpdateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => VestitoCreateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VestitoUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VestitoUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VestitoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VestitoUpdateWithoutUserInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const VestitoUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.VestitoUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => VestitoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VestitoUpdateManyMutationInputSchema),z.lazy(() => VestitoUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const VestitoScalarWhereInputSchema: z.ZodType<Prisma.VestitoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VestitoScalarWhereInputSchema),z.lazy(() => VestitoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VestitoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VestitoScalarWhereInputSchema),z.lazy(() => VestitoScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  viewCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  submissionCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  customTheme: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const CollaboratorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateManyMutationInputSchema),z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const CollaboratorScalarWhereInputSchema: z.ZodType<Prisma.CollaboratorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NotificationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const NotificationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VoteUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VoteUpdateWithoutUserInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const VoteUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateWithoutUserInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const VoteUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => VoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateManyMutationInputSchema),z.lazy(() => VoteUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const VoteScalarWhereInputSchema: z.ZodType<Prisma.VoteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ImpostazioniUpsertWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => ImpostazioniUpdateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ImpostazioniCreateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => ImpostazioniWhereInputSchema).optional()
}).strict();

export const ImpostazioniUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ImpostazioniWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ImpostazioniUpdateWithoutUserInputSchema),z.lazy(() => ImpostazioniUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ImpostazioniUpdateWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  useGlossaryTerms: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showTooltips: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fontSize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showStatsOnLogin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsEmail: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  contrastMode: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImpostazioniUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ImpostazioniUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  useGlossaryTerms: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showTooltips: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fontSize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showStatsOnLogin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notificationsEmail: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  contrastMode: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutVestitiInputSchema: z.ZodType<Prisma.UserCreateWithoutVestitiInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutVestitiInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutVestitiInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutVestitiInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVestitiInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutVestitiInputSchema) ]),
}).strict();

export const TessutoCreateWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoCreateWithoutVestitoInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trame: z.lazy(() => TramaCreateNestedManyWithoutTessutoInputSchema).optional()
}).strict();

export const TessutoUncheckedCreateWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUncheckedCreateWithoutVestitoInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trame: z.lazy(() => TramaUncheckedCreateNestedManyWithoutTessutoInputSchema).optional()
}).strict();

export const TessutoCreateOrConnectWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoCreateOrConnectWithoutVestitoInput> = z.object({
  where: z.lazy(() => TessutoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TessutoCreateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema) ]),
}).strict();

export const TessutoCreateManyVestitoInputEnvelopeSchema: z.ZodType<Prisma.TessutoCreateManyVestitoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TessutoCreateManyVestitoInputSchema),z.lazy(() => TessutoCreateManyVestitoInputSchema).array() ]),
}).strict();

export const CollaboratorCreateWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorCreateWithoutVestitoInput> = z.object({
  role: z.string().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCollaboratedVestitiInputSchema)
}).strict();

export const CollaboratorUncheckedCreateWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutVestitoInput> = z.object({
  userId: z.string(),
  role: z.string().optional()
}).strict();

export const CollaboratorCreateOrConnectWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutVestitoInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema) ]),
}).strict();

export const CollaboratorCreateManyVestitoInputEnvelopeSchema: z.ZodType<Prisma.CollaboratorCreateManyVestitoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CollaboratorCreateManyVestitoInputSchema),z.lazy(() => CollaboratorCreateManyVestitoInputSchema).array() ]),
}).strict();

export const VoteCreateWithoutVestitoInputSchema: z.ZodType<Prisma.VoteCreateWithoutVestitoInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVoteInputSchema)
}).strict();

export const VoteUncheckedCreateWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUncheckedCreateWithoutVestitoInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const VoteCreateOrConnectWithoutVestitoInputSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutVestitoInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VoteCreateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema) ]),
}).strict();

export const VoteCreateManyVestitoInputEnvelopeSchema: z.ZodType<Prisma.VoteCreateManyVestitoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VoteCreateManyVestitoInputSchema),z.lazy(() => VoteCreateManyVestitoInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutVestitiInputSchema: z.ZodType<Prisma.UserUpsertWithoutVestitiInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVestitiInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutVestitiInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutVestitiInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVestitiInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutVestitiInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVestitiInputSchema) ]),
}).strict();

export const UserUpdateWithoutVestitiInputSchema: z.ZodType<Prisma.UserUpdateWithoutVestitiInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutVestitiInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutVestitiInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const TessutoUpsertWithWhereUniqueWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUpsertWithWhereUniqueWithoutVestitoInput> = z.object({
  where: z.lazy(() => TessutoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TessutoUpdateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedUpdateWithoutVestitoInputSchema) ]),
  create: z.union([ z.lazy(() => TessutoCreateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutVestitoInputSchema) ]),
}).strict();

export const TessutoUpdateWithWhereUniqueWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUpdateWithWhereUniqueWithoutVestitoInput> = z.object({
  where: z.lazy(() => TessutoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TessutoUpdateWithoutVestitoInputSchema),z.lazy(() => TessutoUncheckedUpdateWithoutVestitoInputSchema) ]),
}).strict();

export const TessutoUpdateManyWithWhereWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUpdateManyWithWhereWithoutVestitoInput> = z.object({
  where: z.lazy(() => TessutoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TessutoUpdateManyMutationInputSchema),z.lazy(() => TessutoUncheckedUpdateManyWithoutVestitoInputSchema) ]),
}).strict();

export const TessutoScalarWhereInputSchema: z.ZodType<Prisma.TessutoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TessutoScalarWhereInputSchema),z.lazy(() => TessutoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TessutoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TessutoScalarWhereInputSchema),z.lazy(() => TessutoScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vestitoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CollaboratorUpsertWithWhereUniqueWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutVestitoInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutVestitoInputSchema) ]),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutVestitoInputSchema) ]),
}).strict();

export const CollaboratorUpdateWithWhereUniqueWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutVestitoInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateWithoutVestitoInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutVestitoInputSchema) ]),
}).strict();

export const CollaboratorUpdateManyWithWhereWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutVestitoInput> = z.object({
  where: z.lazy(() => CollaboratorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateManyMutationInputSchema),z.lazy(() => CollaboratorUncheckedUpdateManyWithoutVestitoInputSchema) ]),
}).strict();

export const VoteUpsertWithWhereUniqueWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutVestitoInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VoteUpdateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutVestitoInputSchema) ]),
  create: z.union([ z.lazy(() => VoteCreateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedCreateWithoutVestitoInputSchema) ]),
}).strict();

export const VoteUpdateWithWhereUniqueWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutVestitoInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateWithoutVestitoInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutVestitoInputSchema) ]),
}).strict();

export const VoteUpdateManyWithWhereWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutVestitoInput> = z.object({
  where: z.lazy(() => VoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateManyMutationInputSchema),z.lazy(() => VoteUncheckedUpdateManyWithoutVestitoInputSchema) ]),
}).strict();

export const UserCreateWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserCreateWithoutCollaboratedVestitiInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCollaboratedVestitiInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCollaboratedVestitiInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratedVestitiInputSchema) ]),
}).strict();

export const VestitoCreateWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoCreateWithoutCollaboratorsInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVestitiInputSchema),
  tessuti: z.lazy(() => TessutoCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoUncheckedCreateWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoUncheckedCreateWithoutCollaboratorsInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessuti: z.lazy(() => TessutoUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoCreateOrConnectWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoCreateOrConnectWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => VestitoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VestitoCreateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutCollaboratorsInputSchema) ]),
}).strict();

export const UserUpsertWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserUpsertWithoutCollaboratedVestitiInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollaboratedVestitiInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratedVestitiInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCollaboratedVestitiInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCollaboratedVestitiInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollaboratedVestitiInputSchema) ]),
}).strict();

export const UserUpdateWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserUpdateWithoutCollaboratedVestitiInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCollaboratedVestitiInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCollaboratedVestitiInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const VestitoUpsertWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoUpsertWithoutCollaboratorsInput> = z.object({
  update: z.union([ z.lazy(() => VestitoUpdateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
  create: z.union([ z.lazy(() => VestitoCreateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutCollaboratorsInputSchema) ]),
  where: z.lazy(() => VestitoWhereInputSchema).optional()
}).strict();

export const VestitoUpdateToOneWithWhereWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoUpdateToOneWithWhereWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => VestitoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VestitoUpdateWithoutCollaboratorsInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
}).strict();

export const VestitoUpdateWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoUpdateWithoutCollaboratorsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVestitiNestedInputSchema).optional(),
  tessuti: z.lazy(() => TessutoUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoUncheckedUpdateWithoutCollaboratorsInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateWithoutCollaboratorsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoCreateWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoCreateWithoutTessutiInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVestitiInputSchema),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoUncheckedCreateWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoUncheckedCreateWithoutTessutiInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoCreateOrConnectWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoCreateOrConnectWithoutTessutiInput> = z.object({
  where: z.lazy(() => VestitoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VestitoCreateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutTessutiInputSchema) ]),
}).strict();

export const TramaCreateWithoutTessutoInputSchema: z.ZodType<Prisma.TramaCreateWithoutTessutoInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fili: z.lazy(() => FiloCreateNestedManyWithoutTramaInputSchema).optional()
}).strict();

export const TramaUncheckedCreateWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUncheckedCreateWithoutTessutoInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fili: z.lazy(() => FiloUncheckedCreateNestedManyWithoutTramaInputSchema).optional()
}).strict();

export const TramaCreateOrConnectWithoutTessutoInputSchema: z.ZodType<Prisma.TramaCreateOrConnectWithoutTessutoInput> = z.object({
  where: z.lazy(() => TramaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TramaCreateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema) ]),
}).strict();

export const TramaCreateManyTessutoInputEnvelopeSchema: z.ZodType<Prisma.TramaCreateManyTessutoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TramaCreateManyTessutoInputSchema),z.lazy(() => TramaCreateManyTessutoInputSchema).array() ]),
}).strict();

export const VestitoUpsertWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoUpsertWithoutTessutiInput> = z.object({
  update: z.union([ z.lazy(() => VestitoUpdateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutTessutiInputSchema) ]),
  create: z.union([ z.lazy(() => VestitoCreateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutTessutiInputSchema) ]),
  where: z.lazy(() => VestitoWhereInputSchema).optional()
}).strict();

export const VestitoUpdateToOneWithWhereWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoUpdateToOneWithWhereWithoutTessutiInput> = z.object({
  where: z.lazy(() => VestitoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VestitoUpdateWithoutTessutiInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutTessutiInputSchema) ]),
}).strict();

export const VestitoUpdateWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoUpdateWithoutTessutiInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVestitiNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoUncheckedUpdateWithoutTessutiInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateWithoutTessutiInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const TramaUpsertWithWhereUniqueWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUpsertWithWhereUniqueWithoutTessutoInput> = z.object({
  where: z.lazy(() => TramaWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TramaUpdateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedUpdateWithoutTessutoInputSchema) ]),
  create: z.union([ z.lazy(() => TramaCreateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedCreateWithoutTessutoInputSchema) ]),
}).strict();

export const TramaUpdateWithWhereUniqueWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUpdateWithWhereUniqueWithoutTessutoInput> = z.object({
  where: z.lazy(() => TramaWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TramaUpdateWithoutTessutoInputSchema),z.lazy(() => TramaUncheckedUpdateWithoutTessutoInputSchema) ]),
}).strict();

export const TramaUpdateManyWithWhereWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUpdateManyWithWhereWithoutTessutoInput> = z.object({
  where: z.lazy(() => TramaScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TramaUpdateManyMutationInputSchema),z.lazy(() => TramaUncheckedUpdateManyWithoutTessutoInputSchema) ]),
}).strict();

export const TramaScalarWhereInputSchema: z.ZodType<Prisma.TramaScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TramaScalarWhereInputSchema),z.lazy(() => TramaScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TramaScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TramaScalarWhereInputSchema),z.lazy(() => TramaScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tessutoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const FiloCreateWithoutTramaInputSchema: z.ZodType<Prisma.FiloCreateWithoutTramaInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fibre: z.lazy(() => FibraCreateNestedManyWithoutFiloInputSchema).optional(),
  media: z.lazy(() => MediaCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloUncheckedCreateWithoutTramaInputSchema: z.ZodType<Prisma.FiloUncheckedCreateWithoutTramaInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fibre: z.lazy(() => FibraUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  media: z.lazy(() => MediaUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloCreateOrConnectWithoutTramaInputSchema: z.ZodType<Prisma.FiloCreateOrConnectWithoutTramaInput> = z.object({
  where: z.lazy(() => FiloWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FiloCreateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema) ]),
}).strict();

export const FiloCreateManyTramaInputEnvelopeSchema: z.ZodType<Prisma.FiloCreateManyTramaInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FiloCreateManyTramaInputSchema),z.lazy(() => FiloCreateManyTramaInputSchema).array() ]),
}).strict();

export const TessutoCreateWithoutTrameInputSchema: z.ZodType<Prisma.TessutoCreateWithoutTrameInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestito: z.lazy(() => VestitoCreateNestedOneWithoutTessutiInputSchema)
}).strict();

export const TessutoUncheckedCreateWithoutTrameInputSchema: z.ZodType<Prisma.TessutoUncheckedCreateWithoutTrameInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  vestitoId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TessutoCreateOrConnectWithoutTrameInputSchema: z.ZodType<Prisma.TessutoCreateOrConnectWithoutTrameInput> = z.object({
  where: z.lazy(() => TessutoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TessutoCreateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutTrameInputSchema) ]),
}).strict();

export const FiloUpsertWithWhereUniqueWithoutTramaInputSchema: z.ZodType<Prisma.FiloUpsertWithWhereUniqueWithoutTramaInput> = z.object({
  where: z.lazy(() => FiloWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FiloUpdateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutTramaInputSchema) ]),
  create: z.union([ z.lazy(() => FiloCreateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutTramaInputSchema) ]),
}).strict();

export const FiloUpdateWithWhereUniqueWithoutTramaInputSchema: z.ZodType<Prisma.FiloUpdateWithWhereUniqueWithoutTramaInput> = z.object({
  where: z.lazy(() => FiloWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FiloUpdateWithoutTramaInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutTramaInputSchema) ]),
}).strict();

export const FiloUpdateManyWithWhereWithoutTramaInputSchema: z.ZodType<Prisma.FiloUpdateManyWithWhereWithoutTramaInput> = z.object({
  where: z.lazy(() => FiloScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FiloUpdateManyMutationInputSchema),z.lazy(() => FiloUncheckedUpdateManyWithoutTramaInputSchema) ]),
}).strict();

export const FiloScalarWhereInputSchema: z.ZodType<Prisma.FiloScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FiloScalarWhereInputSchema),z.lazy(() => FiloScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FiloScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FiloScalarWhereInputSchema),z.lazy(() => FiloScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tramaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TessutoUpsertWithoutTrameInputSchema: z.ZodType<Prisma.TessutoUpsertWithoutTrameInput> = z.object({
  update: z.union([ z.lazy(() => TessutoUpdateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedUpdateWithoutTrameInputSchema) ]),
  create: z.union([ z.lazy(() => TessutoCreateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedCreateWithoutTrameInputSchema) ]),
  where: z.lazy(() => TessutoWhereInputSchema).optional()
}).strict();

export const TessutoUpdateToOneWithWhereWithoutTrameInputSchema: z.ZodType<Prisma.TessutoUpdateToOneWithWhereWithoutTrameInput> = z.object({
  where: z.lazy(() => TessutoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TessutoUpdateWithoutTrameInputSchema),z.lazy(() => TessutoUncheckedUpdateWithoutTrameInputSchema) ]),
}).strict();

export const TessutoUpdateWithoutTrameInputSchema: z.ZodType<Prisma.TessutoUpdateWithoutTrameInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestito: z.lazy(() => VestitoUpdateOneRequiredWithoutTessutiNestedInputSchema).optional()
}).strict();

export const TessutoUncheckedUpdateWithoutTrameInputSchema: z.ZodType<Prisma.TessutoUncheckedUpdateWithoutTrameInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TramaCreateWithoutFiliInputSchema: z.ZodType<Prisma.TramaCreateWithoutFiliInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessuto: z.lazy(() => TessutoCreateNestedOneWithoutTrameInputSchema)
}).strict();

export const TramaUncheckedCreateWithoutFiliInputSchema: z.ZodType<Prisma.TramaUncheckedCreateWithoutFiliInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessutoId: z.string()
}).strict();

export const TramaCreateOrConnectWithoutFiliInputSchema: z.ZodType<Prisma.TramaCreateOrConnectWithoutFiliInput> = z.object({
  where: z.lazy(() => TramaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TramaCreateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedCreateWithoutFiliInputSchema) ]),
}).strict();

export const FibraCreateWithoutFiloInputSchema: z.ZodType<Prisma.FibraCreateWithoutFiloInput> = z.object({
  id: z.string().optional(),
  nome: z.string(),
  definizione: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FibraUncheckedCreateWithoutFiloInputSchema: z.ZodType<Prisma.FibraUncheckedCreateWithoutFiloInput> = z.object({
  id: z.string().optional(),
  nome: z.string(),
  definizione: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FibraCreateOrConnectWithoutFiloInputSchema: z.ZodType<Prisma.FibraCreateOrConnectWithoutFiloInput> = z.object({
  where: z.lazy(() => FibraWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FibraCreateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema) ]),
}).strict();

export const FibraCreateManyFiloInputEnvelopeSchema: z.ZodType<Prisma.FibraCreateManyFiloInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FibraCreateManyFiloInputSchema),z.lazy(() => FibraCreateManyFiloInputSchema).array() ]),
}).strict();

export const MediaCreateWithoutFiloInputSchema: z.ZodType<Prisma.MediaCreateWithoutFiloInput> = z.object({
  id: z.string().optional(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaUncheckedCreateWithoutFiloInputSchema: z.ZodType<Prisma.MediaUncheckedCreateWithoutFiloInput> = z.object({
  id: z.string().optional(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const MediaCreateOrConnectWithoutFiloInputSchema: z.ZodType<Prisma.MediaCreateOrConnectWithoutFiloInput> = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MediaCreateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema) ]),
}).strict();

export const MediaCreateManyFiloInputEnvelopeSchema: z.ZodType<Prisma.MediaCreateManyFiloInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MediaCreateManyFiloInputSchema),z.lazy(() => MediaCreateManyFiloInputSchema).array() ]),
}).strict();

export const FormResponseCreateWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseCreateWithoutFiloInput> = z.object({
  id: z.string().optional(),
  data: z.string().optional(),
  submittedAt: z.coerce.date().optional()
}).strict();

export const FormResponseUncheckedCreateWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUncheckedCreateWithoutFiloInput> = z.object({
  id: z.string().optional(),
  data: z.string().optional(),
  submittedAt: z.coerce.date().optional()
}).strict();

export const FormResponseCreateOrConnectWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseCreateOrConnectWithoutFiloInput> = z.object({
  where: z.lazy(() => FormResponseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FormResponseCreateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema) ]),
}).strict();

export const FormResponseCreateManyFiloInputEnvelopeSchema: z.ZodType<Prisma.FormResponseCreateManyFiloInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FormResponseCreateManyFiloInputSchema),z.lazy(() => FormResponseCreateManyFiloInputSchema).array() ]),
}).strict();

export const TramaUpsertWithoutFiliInputSchema: z.ZodType<Prisma.TramaUpsertWithoutFiliInput> = z.object({
  update: z.union([ z.lazy(() => TramaUpdateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedUpdateWithoutFiliInputSchema) ]),
  create: z.union([ z.lazy(() => TramaCreateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedCreateWithoutFiliInputSchema) ]),
  where: z.lazy(() => TramaWhereInputSchema).optional()
}).strict();

export const TramaUpdateToOneWithWhereWithoutFiliInputSchema: z.ZodType<Prisma.TramaUpdateToOneWithWhereWithoutFiliInput> = z.object({
  where: z.lazy(() => TramaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TramaUpdateWithoutFiliInputSchema),z.lazy(() => TramaUncheckedUpdateWithoutFiliInputSchema) ]),
}).strict();

export const TramaUpdateWithoutFiliInputSchema: z.ZodType<Prisma.TramaUpdateWithoutFiliInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessuto: z.lazy(() => TessutoUpdateOneRequiredWithoutTrameNestedInputSchema).optional()
}).strict();

export const TramaUncheckedUpdateWithoutFiliInputSchema: z.ZodType<Prisma.TramaUncheckedUpdateWithoutFiliInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessutoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraUpsertWithWhereUniqueWithoutFiloInputSchema: z.ZodType<Prisma.FibraUpsertWithWhereUniqueWithoutFiloInput> = z.object({
  where: z.lazy(() => FibraWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FibraUpdateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedUpdateWithoutFiloInputSchema) ]),
  create: z.union([ z.lazy(() => FibraCreateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedCreateWithoutFiloInputSchema) ]),
}).strict();

export const FibraUpdateWithWhereUniqueWithoutFiloInputSchema: z.ZodType<Prisma.FibraUpdateWithWhereUniqueWithoutFiloInput> = z.object({
  where: z.lazy(() => FibraWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FibraUpdateWithoutFiloInputSchema),z.lazy(() => FibraUncheckedUpdateWithoutFiloInputSchema) ]),
}).strict();

export const FibraUpdateManyWithWhereWithoutFiloInputSchema: z.ZodType<Prisma.FibraUpdateManyWithWhereWithoutFiloInput> = z.object({
  where: z.lazy(() => FibraScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FibraUpdateManyMutationInputSchema),z.lazy(() => FibraUncheckedUpdateManyWithoutFiloInputSchema) ]),
}).strict();

export const FibraScalarWhereInputSchema: z.ZodType<Prisma.FibraScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FibraScalarWhereInputSchema),z.lazy(() => FibraScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FibraScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FibraScalarWhereInputSchema),z.lazy(() => FibraScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  definizione: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MediaUpsertWithWhereUniqueWithoutFiloInputSchema: z.ZodType<Prisma.MediaUpsertWithWhereUniqueWithoutFiloInput> = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MediaUpdateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedUpdateWithoutFiloInputSchema) ]),
  create: z.union([ z.lazy(() => MediaCreateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedCreateWithoutFiloInputSchema) ]),
}).strict();

export const MediaUpdateWithWhereUniqueWithoutFiloInputSchema: z.ZodType<Prisma.MediaUpdateWithWhereUniqueWithoutFiloInput> = z.object({
  where: z.lazy(() => MediaWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MediaUpdateWithoutFiloInputSchema),z.lazy(() => MediaUncheckedUpdateWithoutFiloInputSchema) ]),
}).strict();

export const MediaUpdateManyWithWhereWithoutFiloInputSchema: z.ZodType<Prisma.MediaUpdateManyWithWhereWithoutFiloInput> = z.object({
  where: z.lazy(() => MediaScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MediaUpdateManyMutationInputSchema),z.lazy(() => MediaUncheckedUpdateManyWithoutFiloInputSchema) ]),
}).strict();

export const MediaScalarWhereInputSchema: z.ZodType<Prisma.MediaScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaScalarWhereInputSchema),z.lazy(() => MediaScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  filoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const FormResponseUpsertWithWhereUniqueWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUpsertWithWhereUniqueWithoutFiloInput> = z.object({
  where: z.lazy(() => FormResponseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FormResponseUpdateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedUpdateWithoutFiloInputSchema) ]),
  create: z.union([ z.lazy(() => FormResponseCreateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedCreateWithoutFiloInputSchema) ]),
}).strict();

export const FormResponseUpdateWithWhereUniqueWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUpdateWithWhereUniqueWithoutFiloInput> = z.object({
  where: z.lazy(() => FormResponseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FormResponseUpdateWithoutFiloInputSchema),z.lazy(() => FormResponseUncheckedUpdateWithoutFiloInputSchema) ]),
}).strict();

export const FormResponseUpdateManyWithWhereWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUpdateManyWithWhereWithoutFiloInput> = z.object({
  where: z.lazy(() => FormResponseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FormResponseUpdateManyMutationInputSchema),z.lazy(() => FormResponseUncheckedUpdateManyWithoutFiloInputSchema) ]),
}).strict();

export const FormResponseScalarWhereInputSchema: z.ZodType<Prisma.FormResponseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FormResponseScalarWhereInputSchema),z.lazy(() => FormResponseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FormResponseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FormResponseScalarWhereInputSchema),z.lazy(() => FormResponseScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filoId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  submittedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const FiloCreateWithoutFibreInputSchema: z.ZodType<Prisma.FiloCreateWithoutFibreInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trama: z.lazy(() => TramaCreateNestedOneWithoutFiliInputSchema),
  media: z.lazy(() => MediaCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloUncheckedCreateWithoutFibreInputSchema: z.ZodType<Prisma.FiloUncheckedCreateWithoutFibreInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  tramaId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  media: z.lazy(() => MediaUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloCreateOrConnectWithoutFibreInputSchema: z.ZodType<Prisma.FiloCreateOrConnectWithoutFibreInput> = z.object({
  where: z.lazy(() => FiloWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FiloCreateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedCreateWithoutFibreInputSchema) ]),
}).strict();

export const FiloUpsertWithoutFibreInputSchema: z.ZodType<Prisma.FiloUpsertWithoutFibreInput> = z.object({
  update: z.union([ z.lazy(() => FiloUpdateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutFibreInputSchema) ]),
  create: z.union([ z.lazy(() => FiloCreateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedCreateWithoutFibreInputSchema) ]),
  where: z.lazy(() => FiloWhereInputSchema).optional()
}).strict();

export const FiloUpdateToOneWithWhereWithoutFibreInputSchema: z.ZodType<Prisma.FiloUpdateToOneWithWhereWithoutFibreInput> = z.object({
  where: z.lazy(() => FiloWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FiloUpdateWithoutFibreInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutFibreInputSchema) ]),
}).strict();

export const FiloUpdateWithoutFibreInputSchema: z.ZodType<Prisma.FiloUpdateWithoutFibreInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trama: z.lazy(() => TramaUpdateOneRequiredWithoutFiliNestedInputSchema).optional(),
  media: z.lazy(() => MediaUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloUncheckedUpdateWithoutFibreInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateWithoutFibreInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tramaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  media: z.lazy(() => MediaUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateWithoutNotificationsInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]),
}).strict();

export const UserUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]),
}).strict();

export const UserUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutNotificationsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Vote: z.lazy(() => VoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const FiloCreateWithoutMediaInputSchema: z.ZodType<Prisma.FiloCreateWithoutMediaInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trama: z.lazy(() => TramaCreateNestedOneWithoutFiliInputSchema),
  fibre: z.lazy(() => FibraCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloUncheckedCreateWithoutMediaInputSchema: z.ZodType<Prisma.FiloUncheckedCreateWithoutMediaInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  tramaId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fibre: z.lazy(() => FibraUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloCreateOrConnectWithoutMediaInputSchema: z.ZodType<Prisma.FiloCreateOrConnectWithoutMediaInput> = z.object({
  where: z.lazy(() => FiloWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FiloCreateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutMediaInputSchema) ]),
}).strict();

export const FiloUpsertWithoutMediaInputSchema: z.ZodType<Prisma.FiloUpsertWithoutMediaInput> = z.object({
  update: z.union([ z.lazy(() => FiloUpdateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutMediaInputSchema) ]),
  create: z.union([ z.lazy(() => FiloCreateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedCreateWithoutMediaInputSchema) ]),
  where: z.lazy(() => FiloWhereInputSchema).optional()
}).strict();

export const FiloUpdateToOneWithWhereWithoutMediaInputSchema: z.ZodType<Prisma.FiloUpdateToOneWithWhereWithoutMediaInput> = z.object({
  where: z.lazy(() => FiloWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FiloUpdateWithoutMediaInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutMediaInputSchema) ]),
}).strict();

export const FiloUpdateWithoutMediaInputSchema: z.ZodType<Prisma.FiloUpdateWithoutMediaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trama: z.lazy(() => TramaUpdateOneRequiredWithoutFiliNestedInputSchema).optional(),
  fibre: z.lazy(() => FibraUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloUncheckedUpdateWithoutMediaInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateWithoutMediaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tramaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutVoteInputSchema: z.ZodType<Prisma.UserCreateWithoutVoteInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutVoteInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutVoteInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nome: z.string(),
  cognome: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vestiti: z.lazy(() => VestitoUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutVoteInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVoteInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutVoteInputSchema),z.lazy(() => UserUncheckedCreateWithoutVoteInputSchema) ]),
}).strict();

export const VestitoCreateWithoutVotesInputSchema: z.ZodType<Prisma.VestitoCreateWithoutVotesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVestitiInputSchema),
  tessuti: z.lazy(() => TessutoCreateNestedManyWithoutVestitoInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoUncheckedCreateWithoutVotesInputSchema: z.ZodType<Prisma.VestitoUncheckedCreateWithoutVotesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tessuti: z.lazy(() => TessutoUncheckedCreateNestedManyWithoutVestitoInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutVestitoInputSchema).optional()
}).strict();

export const VestitoCreateOrConnectWithoutVotesInputSchema: z.ZodType<Prisma.VestitoCreateOrConnectWithoutVotesInput> = z.object({
  where: z.lazy(() => VestitoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VestitoCreateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutVotesInputSchema) ]),
}).strict();

export const UserUpsertWithoutVoteInputSchema: z.ZodType<Prisma.UserUpsertWithoutVoteInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutVoteInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVoteInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutVoteInputSchema),z.lazy(() => UserUncheckedCreateWithoutVoteInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutVoteInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVoteInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutVoteInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVoteInputSchema) ]),
}).strict();

export const UserUpdateWithoutVoteInputSchema: z.ZodType<Prisma.UserUpdateWithoutVoteInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutVoteInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutVoteInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cognome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestiti: z.lazy(() => VestitoUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  collaboratedVestiti: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  impostazioni: z.lazy(() => ImpostazioniUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const VestitoUpsertWithoutVotesInputSchema: z.ZodType<Prisma.VestitoUpsertWithoutVotesInput> = z.object({
  update: z.union([ z.lazy(() => VestitoUpdateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutVotesInputSchema) ]),
  create: z.union([ z.lazy(() => VestitoCreateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedCreateWithoutVotesInputSchema) ]),
  where: z.lazy(() => VestitoWhereInputSchema).optional()
}).strict();

export const VestitoUpdateToOneWithWhereWithoutVotesInputSchema: z.ZodType<Prisma.VestitoUpdateToOneWithWhereWithoutVotesInput> = z.object({
  where: z.lazy(() => VestitoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VestitoUpdateWithoutVotesInputSchema),z.lazy(() => VestitoUncheckedUpdateWithoutVotesInputSchema) ]),
}).strict();

export const VestitoUpdateWithoutVotesInputSchema: z.ZodType<Prisma.VestitoUpdateWithoutVotesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVestitiNestedInputSchema).optional(),
  tessuti: z.lazy(() => TessutoUpdateManyWithoutVestitoNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoUncheckedUpdateWithoutVotesInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateWithoutVotesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const FiloCreateWithoutResponsesInputSchema: z.ZodType<Prisma.FiloCreateWithoutResponsesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trama: z.lazy(() => TramaCreateNestedOneWithoutFiliInputSchema),
  fibre: z.lazy(() => FibraCreateNestedManyWithoutFiloInputSchema).optional(),
  media: z.lazy(() => MediaCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloUncheckedCreateWithoutResponsesInputSchema: z.ZodType<Prisma.FiloUncheckedCreateWithoutResponsesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  tramaId: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fibre: z.lazy(() => FibraUncheckedCreateNestedManyWithoutFiloInputSchema).optional(),
  media: z.lazy(() => MediaUncheckedCreateNestedManyWithoutFiloInputSchema).optional()
}).strict();

export const FiloCreateOrConnectWithoutResponsesInputSchema: z.ZodType<Prisma.FiloCreateOrConnectWithoutResponsesInput> = z.object({
  where: z.lazy(() => FiloWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FiloCreateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedCreateWithoutResponsesInputSchema) ]),
}).strict();

export const FiloUpsertWithoutResponsesInputSchema: z.ZodType<Prisma.FiloUpsertWithoutResponsesInput> = z.object({
  update: z.union([ z.lazy(() => FiloUpdateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutResponsesInputSchema) ]),
  create: z.union([ z.lazy(() => FiloCreateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedCreateWithoutResponsesInputSchema) ]),
  where: z.lazy(() => FiloWhereInputSchema).optional()
}).strict();

export const FiloUpdateToOneWithWhereWithoutResponsesInputSchema: z.ZodType<Prisma.FiloUpdateToOneWithWhereWithoutResponsesInput> = z.object({
  where: z.lazy(() => FiloWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FiloUpdateWithoutResponsesInputSchema),z.lazy(() => FiloUncheckedUpdateWithoutResponsesInputSchema) ]),
}).strict();

export const FiloUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.FiloUpdateWithoutResponsesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trama: z.lazy(() => TramaUpdateOneRequiredWithoutFiliNestedInputSchema).optional(),
  fibre: z.lazy(() => FibraUpdateManyWithoutFiloNestedInputSchema).optional(),
  media: z.lazy(() => MediaUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloUncheckedUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateWithoutResponsesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tramaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  media: z.lazy(() => MediaUncheckedUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const VestitoCreateManyUserInputSchema: z.ZodType<Prisma.VestitoCreateManyUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  isPublished: z.boolean().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  viewCount: z.number().int().optional(),
  submissionCount: z.number().int().optional(),
  customTheme: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CollaboratorCreateManyUserInputSchema: z.ZodType<Prisma.CollaboratorCreateManyUserInput> = z.object({
  vestitoId: z.string(),
  role: z.string().optional()
}).strict();

export const NotificationCreateManyUserInputSchema: z.ZodType<Prisma.NotificationCreateManyUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const VoteCreateManyUserInputSchema: z.ZodType<Prisma.VoteCreateManyUserInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  vestitoId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const VestitoUpdateWithoutUserInputSchema: z.ZodType<Prisma.VestitoUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoUpdateManyWithoutVestitoNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tessuti: z.lazy(() => TessutoUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutVestitoNestedInputSchema).optional()
}).strict();

export const VestitoUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.VestitoUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  submissionCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTheme: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorUpdateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithoutUserInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vestito: z.lazy(() => VestitoUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export const CollaboratorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateWithoutUserInput> = z.object({
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutUserInput> = z.object({
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteUpdateWithoutUserInputSchema: z.ZodType<Prisma.VoteUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vestito: z.lazy(() => VestitoUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export const VoteUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  vestitoId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TessutoCreateManyVestitoInputSchema: z.ZodType<Prisma.TessutoCreateManyVestitoInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CollaboratorCreateManyVestitoInputSchema: z.ZodType<Prisma.CollaboratorCreateManyVestitoInput> = z.object({
  userId: z.string(),
  role: z.string().optional()
}).strict();

export const VoteCreateManyVestitoInputSchema: z.ZodType<Prisma.VoteCreateManyVestitoInput> = z.object({
  id: z.string().optional(),
  value: z.number().int(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const TessutoUpdateWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUpdateWithoutVestitoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trame: z.lazy(() => TramaUpdateManyWithoutTessutoNestedInputSchema).optional()
}).strict();

export const TessutoUncheckedUpdateWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUncheckedUpdateWithoutVestitoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trame: z.lazy(() => TramaUncheckedUpdateManyWithoutTessutoNestedInputSchema).optional()
}).strict();

export const TessutoUncheckedUpdateManyWithoutVestitoInputSchema: z.ZodType<Prisma.TessutoUncheckedUpdateManyWithoutVestitoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorUpdateWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithoutVestitoInput> = z.object({
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCollaboratedVestitiNestedInputSchema).optional()
}).strict();

export const CollaboratorUncheckedUpdateWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateWithoutVestitoInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollaboratorUncheckedUpdateManyWithoutVestitoInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutVestitoInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteUpdateWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUpdateWithoutVestitoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVoteNestedInputSchema).optional()
}).strict();

export const VoteUncheckedUpdateWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateWithoutVestitoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoteUncheckedUpdateManyWithoutVestitoInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutVestitoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TramaCreateManyTessutoInputSchema: z.ZodType<Prisma.TramaCreateManyTessutoInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TramaUpdateWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUpdateWithoutTessutoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fili: z.lazy(() => FiloUpdateManyWithoutTramaNestedInputSchema).optional()
}).strict();

export const TramaUncheckedUpdateWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUncheckedUpdateWithoutTessutoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fili: z.lazy(() => FiloUncheckedUpdateManyWithoutTramaNestedInputSchema).optional()
}).strict();

export const TramaUncheckedUpdateManyWithoutTessutoInputSchema: z.ZodType<Prisma.TramaUncheckedUpdateManyWithoutTessutoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FiloCreateManyTramaInputSchema: z.ZodType<Prisma.FiloCreateManyTramaInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FiloUpdateWithoutTramaInputSchema: z.ZodType<Prisma.FiloUpdateWithoutTramaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraUpdateManyWithoutFiloNestedInputSchema).optional(),
  media: z.lazy(() => MediaUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloUncheckedUpdateWithoutTramaInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateWithoutTramaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fibre: z.lazy(() => FibraUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  media: z.lazy(() => MediaUncheckedUpdateManyWithoutFiloNestedInputSchema).optional(),
  responses: z.lazy(() => FormResponseUncheckedUpdateManyWithoutFiloNestedInputSchema).optional()
}).strict();

export const FiloUncheckedUpdateManyWithoutTramaInputSchema: z.ZodType<Prisma.FiloUncheckedUpdateManyWithoutTramaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraCreateManyFiloInputSchema: z.ZodType<Prisma.FibraCreateManyFiloInput> = z.object({
  id: z.string().optional(),
  nome: z.string(),
  definizione: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MediaCreateManyFiloInputSchema: z.ZodType<Prisma.MediaCreateManyFiloInput> = z.object({
  id: z.string().optional(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const FormResponseCreateManyFiloInputSchema: z.ZodType<Prisma.FormResponseCreateManyFiloInput> = z.object({
  id: z.string().optional(),
  data: z.string().optional(),
  submittedAt: z.coerce.date().optional()
}).strict();

export const FibraUpdateWithoutFiloInputSchema: z.ZodType<Prisma.FibraUpdateWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraUncheckedUpdateWithoutFiloInputSchema: z.ZodType<Prisma.FibraUncheckedUpdateWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FibraUncheckedUpdateManyWithoutFiloInputSchema: z.ZodType<Prisma.FibraUncheckedUpdateManyWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  definizione: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUpdateWithoutFiloInputSchema: z.ZodType<Prisma.MediaUpdateWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUncheckedUpdateWithoutFiloInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MediaUncheckedUpdateManyWithoutFiloInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FormResponseUpdateWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUpdateWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FormResponseUncheckedUpdateWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUncheckedUpdateWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FormResponseUncheckedUpdateManyWithoutFiloInputSchema: z.ZodType<Prisma.FormResponseUncheckedUpdateManyWithoutFiloInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const ImpostazioniFindFirstArgsSchema: z.ZodType<Prisma.ImpostazioniFindFirstArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereInputSchema.optional(),
  orderBy: z.union([ ImpostazioniOrderByWithRelationInputSchema.array(),ImpostazioniOrderByWithRelationInputSchema ]).optional(),
  cursor: ImpostazioniWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImpostazioniScalarFieldEnumSchema,ImpostazioniScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImpostazioniFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImpostazioniFindFirstOrThrowArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereInputSchema.optional(),
  orderBy: z.union([ ImpostazioniOrderByWithRelationInputSchema.array(),ImpostazioniOrderByWithRelationInputSchema ]).optional(),
  cursor: ImpostazioniWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImpostazioniScalarFieldEnumSchema,ImpostazioniScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImpostazioniFindManyArgsSchema: z.ZodType<Prisma.ImpostazioniFindManyArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereInputSchema.optional(),
  orderBy: z.union([ ImpostazioniOrderByWithRelationInputSchema.array(),ImpostazioniOrderByWithRelationInputSchema ]).optional(),
  cursor: ImpostazioniWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImpostazioniScalarFieldEnumSchema,ImpostazioniScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImpostazioniAggregateArgsSchema: z.ZodType<Prisma.ImpostazioniAggregateArgs> = z.object({
  where: ImpostazioniWhereInputSchema.optional(),
  orderBy: z.union([ ImpostazioniOrderByWithRelationInputSchema.array(),ImpostazioniOrderByWithRelationInputSchema ]).optional(),
  cursor: ImpostazioniWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ImpostazioniGroupByArgsSchema: z.ZodType<Prisma.ImpostazioniGroupByArgs> = z.object({
  where: ImpostazioniWhereInputSchema.optional(),
  orderBy: z.union([ ImpostazioniOrderByWithAggregationInputSchema.array(),ImpostazioniOrderByWithAggregationInputSchema ]).optional(),
  by: ImpostazioniScalarFieldEnumSchema.array(),
  having: ImpostazioniScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ImpostazioniFindUniqueArgsSchema: z.ZodType<Prisma.ImpostazioniFindUniqueArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereUniqueInputSchema,
}).strict() ;

export const ImpostazioniFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImpostazioniFindUniqueOrThrowArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const VestitoFindFirstArgsSchema: z.ZodType<Prisma.VestitoFindFirstArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereInputSchema.optional(),
  orderBy: z.union([ VestitoOrderByWithRelationInputSchema.array(),VestitoOrderByWithRelationInputSchema ]).optional(),
  cursor: VestitoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VestitoScalarFieldEnumSchema,VestitoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VestitoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VestitoFindFirstOrThrowArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereInputSchema.optional(),
  orderBy: z.union([ VestitoOrderByWithRelationInputSchema.array(),VestitoOrderByWithRelationInputSchema ]).optional(),
  cursor: VestitoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VestitoScalarFieldEnumSchema,VestitoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VestitoFindManyArgsSchema: z.ZodType<Prisma.VestitoFindManyArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereInputSchema.optional(),
  orderBy: z.union([ VestitoOrderByWithRelationInputSchema.array(),VestitoOrderByWithRelationInputSchema ]).optional(),
  cursor: VestitoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VestitoScalarFieldEnumSchema,VestitoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VestitoAggregateArgsSchema: z.ZodType<Prisma.VestitoAggregateArgs> = z.object({
  where: VestitoWhereInputSchema.optional(),
  orderBy: z.union([ VestitoOrderByWithRelationInputSchema.array(),VestitoOrderByWithRelationInputSchema ]).optional(),
  cursor: VestitoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VestitoGroupByArgsSchema: z.ZodType<Prisma.VestitoGroupByArgs> = z.object({
  where: VestitoWhereInputSchema.optional(),
  orderBy: z.union([ VestitoOrderByWithAggregationInputSchema.array(),VestitoOrderByWithAggregationInputSchema ]).optional(),
  by: VestitoScalarFieldEnumSchema.array(),
  having: VestitoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VestitoFindUniqueArgsSchema: z.ZodType<Prisma.VestitoFindUniqueArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereUniqueInputSchema,
}).strict() ;

export const VestitoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VestitoFindUniqueOrThrowArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereUniqueInputSchema,
}).strict() ;

export const CollaboratorFindFirstArgsSchema: z.ZodType<Prisma.CollaboratorFindFirstArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithRelationInputSchema.array(),CollaboratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CollaboratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollaboratorScalarFieldEnumSchema,CollaboratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollaboratorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CollaboratorFindFirstOrThrowArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithRelationInputSchema.array(),CollaboratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CollaboratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollaboratorScalarFieldEnumSchema,CollaboratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollaboratorFindManyArgsSchema: z.ZodType<Prisma.CollaboratorFindManyArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithRelationInputSchema.array(),CollaboratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CollaboratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollaboratorScalarFieldEnumSchema,CollaboratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollaboratorAggregateArgsSchema: z.ZodType<Prisma.CollaboratorAggregateArgs> = z.object({
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithRelationInputSchema.array(),CollaboratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CollaboratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CollaboratorGroupByArgsSchema: z.ZodType<Prisma.CollaboratorGroupByArgs> = z.object({
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithAggregationInputSchema.array(),CollaboratorOrderByWithAggregationInputSchema ]).optional(),
  by: CollaboratorScalarFieldEnumSchema.array(),
  having: CollaboratorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CollaboratorFindUniqueArgsSchema: z.ZodType<Prisma.CollaboratorFindUniqueArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereUniqueInputSchema,
}).strict() ;

export const CollaboratorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CollaboratorFindUniqueOrThrowArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereUniqueInputSchema,
}).strict() ;

export const TessutoFindFirstArgsSchema: z.ZodType<Prisma.TessutoFindFirstArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereInputSchema.optional(),
  orderBy: z.union([ TessutoOrderByWithRelationInputSchema.array(),TessutoOrderByWithRelationInputSchema ]).optional(),
  cursor: TessutoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TessutoScalarFieldEnumSchema,TessutoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TessutoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TessutoFindFirstOrThrowArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereInputSchema.optional(),
  orderBy: z.union([ TessutoOrderByWithRelationInputSchema.array(),TessutoOrderByWithRelationInputSchema ]).optional(),
  cursor: TessutoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TessutoScalarFieldEnumSchema,TessutoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TessutoFindManyArgsSchema: z.ZodType<Prisma.TessutoFindManyArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereInputSchema.optional(),
  orderBy: z.union([ TessutoOrderByWithRelationInputSchema.array(),TessutoOrderByWithRelationInputSchema ]).optional(),
  cursor: TessutoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TessutoScalarFieldEnumSchema,TessutoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TessutoAggregateArgsSchema: z.ZodType<Prisma.TessutoAggregateArgs> = z.object({
  where: TessutoWhereInputSchema.optional(),
  orderBy: z.union([ TessutoOrderByWithRelationInputSchema.array(),TessutoOrderByWithRelationInputSchema ]).optional(),
  cursor: TessutoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TessutoGroupByArgsSchema: z.ZodType<Prisma.TessutoGroupByArgs> = z.object({
  where: TessutoWhereInputSchema.optional(),
  orderBy: z.union([ TessutoOrderByWithAggregationInputSchema.array(),TessutoOrderByWithAggregationInputSchema ]).optional(),
  by: TessutoScalarFieldEnumSchema.array(),
  having: TessutoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TessutoFindUniqueArgsSchema: z.ZodType<Prisma.TessutoFindUniqueArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereUniqueInputSchema,
}).strict() ;

export const TessutoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TessutoFindUniqueOrThrowArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereUniqueInputSchema,
}).strict() ;

export const TramaFindFirstArgsSchema: z.ZodType<Prisma.TramaFindFirstArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereInputSchema.optional(),
  orderBy: z.union([ TramaOrderByWithRelationInputSchema.array(),TramaOrderByWithRelationInputSchema ]).optional(),
  cursor: TramaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TramaScalarFieldEnumSchema,TramaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TramaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TramaFindFirstOrThrowArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereInputSchema.optional(),
  orderBy: z.union([ TramaOrderByWithRelationInputSchema.array(),TramaOrderByWithRelationInputSchema ]).optional(),
  cursor: TramaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TramaScalarFieldEnumSchema,TramaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TramaFindManyArgsSchema: z.ZodType<Prisma.TramaFindManyArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereInputSchema.optional(),
  orderBy: z.union([ TramaOrderByWithRelationInputSchema.array(),TramaOrderByWithRelationInputSchema ]).optional(),
  cursor: TramaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TramaScalarFieldEnumSchema,TramaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TramaAggregateArgsSchema: z.ZodType<Prisma.TramaAggregateArgs> = z.object({
  where: TramaWhereInputSchema.optional(),
  orderBy: z.union([ TramaOrderByWithRelationInputSchema.array(),TramaOrderByWithRelationInputSchema ]).optional(),
  cursor: TramaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TramaGroupByArgsSchema: z.ZodType<Prisma.TramaGroupByArgs> = z.object({
  where: TramaWhereInputSchema.optional(),
  orderBy: z.union([ TramaOrderByWithAggregationInputSchema.array(),TramaOrderByWithAggregationInputSchema ]).optional(),
  by: TramaScalarFieldEnumSchema.array(),
  having: TramaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TramaFindUniqueArgsSchema: z.ZodType<Prisma.TramaFindUniqueArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereUniqueInputSchema,
}).strict() ;

export const TramaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TramaFindUniqueOrThrowArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereUniqueInputSchema,
}).strict() ;

export const FiloFindFirstArgsSchema: z.ZodType<Prisma.FiloFindFirstArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereInputSchema.optional(),
  orderBy: z.union([ FiloOrderByWithRelationInputSchema.array(),FiloOrderByWithRelationInputSchema ]).optional(),
  cursor: FiloWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FiloScalarFieldEnumSchema,FiloScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FiloFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FiloFindFirstOrThrowArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereInputSchema.optional(),
  orderBy: z.union([ FiloOrderByWithRelationInputSchema.array(),FiloOrderByWithRelationInputSchema ]).optional(),
  cursor: FiloWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FiloScalarFieldEnumSchema,FiloScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FiloFindManyArgsSchema: z.ZodType<Prisma.FiloFindManyArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereInputSchema.optional(),
  orderBy: z.union([ FiloOrderByWithRelationInputSchema.array(),FiloOrderByWithRelationInputSchema ]).optional(),
  cursor: FiloWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FiloScalarFieldEnumSchema,FiloScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FiloAggregateArgsSchema: z.ZodType<Prisma.FiloAggregateArgs> = z.object({
  where: FiloWhereInputSchema.optional(),
  orderBy: z.union([ FiloOrderByWithRelationInputSchema.array(),FiloOrderByWithRelationInputSchema ]).optional(),
  cursor: FiloWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FiloGroupByArgsSchema: z.ZodType<Prisma.FiloGroupByArgs> = z.object({
  where: FiloWhereInputSchema.optional(),
  orderBy: z.union([ FiloOrderByWithAggregationInputSchema.array(),FiloOrderByWithAggregationInputSchema ]).optional(),
  by: FiloScalarFieldEnumSchema.array(),
  having: FiloScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FiloFindUniqueArgsSchema: z.ZodType<Prisma.FiloFindUniqueArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereUniqueInputSchema,
}).strict() ;

export const FiloFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FiloFindUniqueOrThrowArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereUniqueInputSchema,
}).strict() ;

export const FibraFindFirstArgsSchema: z.ZodType<Prisma.FibraFindFirstArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereInputSchema.optional(),
  orderBy: z.union([ FibraOrderByWithRelationInputSchema.array(),FibraOrderByWithRelationInputSchema ]).optional(),
  cursor: FibraWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FibraScalarFieldEnumSchema,FibraScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FibraFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FibraFindFirstOrThrowArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereInputSchema.optional(),
  orderBy: z.union([ FibraOrderByWithRelationInputSchema.array(),FibraOrderByWithRelationInputSchema ]).optional(),
  cursor: FibraWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FibraScalarFieldEnumSchema,FibraScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FibraFindManyArgsSchema: z.ZodType<Prisma.FibraFindManyArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereInputSchema.optional(),
  orderBy: z.union([ FibraOrderByWithRelationInputSchema.array(),FibraOrderByWithRelationInputSchema ]).optional(),
  cursor: FibraWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FibraScalarFieldEnumSchema,FibraScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FibraAggregateArgsSchema: z.ZodType<Prisma.FibraAggregateArgs> = z.object({
  where: FibraWhereInputSchema.optional(),
  orderBy: z.union([ FibraOrderByWithRelationInputSchema.array(),FibraOrderByWithRelationInputSchema ]).optional(),
  cursor: FibraWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FibraGroupByArgsSchema: z.ZodType<Prisma.FibraGroupByArgs> = z.object({
  where: FibraWhereInputSchema.optional(),
  orderBy: z.union([ FibraOrderByWithAggregationInputSchema.array(),FibraOrderByWithAggregationInputSchema ]).optional(),
  by: FibraScalarFieldEnumSchema.array(),
  having: FibraScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FibraFindUniqueArgsSchema: z.ZodType<Prisma.FibraFindUniqueArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereUniqueInputSchema,
}).strict() ;

export const FibraFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FibraFindUniqueOrThrowArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindFirstArgsSchema: z.ZodType<Prisma.NotificationFindFirstArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindManyArgsSchema: z.ZodType<Prisma.NotificationFindManyArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationAggregateArgsSchema: z.ZodType<Prisma.NotificationAggregateArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationGroupByArgsSchema: z.ZodType<Prisma.NotificationGroupByArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithAggregationInputSchema.array(),NotificationOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationScalarFieldEnumSchema.array(),
  having: NotificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationFindUniqueArgsSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const MediaFindFirstArgsSchema: z.ZodType<Prisma.MediaFindFirstArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MediaScalarFieldEnumSchema,MediaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MediaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MediaFindFirstOrThrowArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MediaScalarFieldEnumSchema,MediaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MediaFindManyArgsSchema: z.ZodType<Prisma.MediaFindManyArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MediaScalarFieldEnumSchema,MediaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MediaAggregateArgsSchema: z.ZodType<Prisma.MediaAggregateArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithRelationInputSchema.array(),MediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MediaGroupByArgsSchema: z.ZodType<Prisma.MediaGroupByArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
  orderBy: z.union([ MediaOrderByWithAggregationInputSchema.array(),MediaOrderByWithAggregationInputSchema ]).optional(),
  by: MediaScalarFieldEnumSchema.array(),
  having: MediaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MediaFindUniqueArgsSchema: z.ZodType<Prisma.MediaFindUniqueArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
}).strict() ;

export const MediaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MediaFindUniqueOrThrowArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
}).strict() ;

export const VoteFindFirstArgsSchema: z.ZodType<Prisma.VoteFindFirstArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithRelationInputSchema.array(),VoteOrderByWithRelationInputSchema ]).optional(),
  cursor: VoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VoteScalarFieldEnumSchema,VoteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VoteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VoteFindFirstOrThrowArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithRelationInputSchema.array(),VoteOrderByWithRelationInputSchema ]).optional(),
  cursor: VoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VoteScalarFieldEnumSchema,VoteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VoteFindManyArgsSchema: z.ZodType<Prisma.VoteFindManyArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithRelationInputSchema.array(),VoteOrderByWithRelationInputSchema ]).optional(),
  cursor: VoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VoteScalarFieldEnumSchema,VoteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VoteAggregateArgsSchema: z.ZodType<Prisma.VoteAggregateArgs> = z.object({
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithRelationInputSchema.array(),VoteOrderByWithRelationInputSchema ]).optional(),
  cursor: VoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VoteGroupByArgsSchema: z.ZodType<Prisma.VoteGroupByArgs> = z.object({
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithAggregationInputSchema.array(),VoteOrderByWithAggregationInputSchema ]).optional(),
  by: VoteScalarFieldEnumSchema.array(),
  having: VoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VoteFindUniqueArgsSchema: z.ZodType<Prisma.VoteFindUniqueArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereUniqueInputSchema,
}).strict() ;

export const VoteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VoteFindUniqueOrThrowArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereUniqueInputSchema,
}).strict() ;

export const FormResponseFindFirstArgsSchema: z.ZodType<Prisma.FormResponseFindFirstArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereInputSchema.optional(),
  orderBy: z.union([ FormResponseOrderByWithRelationInputSchema.array(),FormResponseOrderByWithRelationInputSchema ]).optional(),
  cursor: FormResponseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FormResponseScalarFieldEnumSchema,FormResponseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FormResponseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FormResponseFindFirstOrThrowArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereInputSchema.optional(),
  orderBy: z.union([ FormResponseOrderByWithRelationInputSchema.array(),FormResponseOrderByWithRelationInputSchema ]).optional(),
  cursor: FormResponseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FormResponseScalarFieldEnumSchema,FormResponseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FormResponseFindManyArgsSchema: z.ZodType<Prisma.FormResponseFindManyArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereInputSchema.optional(),
  orderBy: z.union([ FormResponseOrderByWithRelationInputSchema.array(),FormResponseOrderByWithRelationInputSchema ]).optional(),
  cursor: FormResponseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FormResponseScalarFieldEnumSchema,FormResponseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FormResponseAggregateArgsSchema: z.ZodType<Prisma.FormResponseAggregateArgs> = z.object({
  where: FormResponseWhereInputSchema.optional(),
  orderBy: z.union([ FormResponseOrderByWithRelationInputSchema.array(),FormResponseOrderByWithRelationInputSchema ]).optional(),
  cursor: FormResponseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FormResponseGroupByArgsSchema: z.ZodType<Prisma.FormResponseGroupByArgs> = z.object({
  where: FormResponseWhereInputSchema.optional(),
  orderBy: z.union([ FormResponseOrderByWithAggregationInputSchema.array(),FormResponseOrderByWithAggregationInputSchema ]).optional(),
  by: FormResponseScalarFieldEnumSchema.array(),
  having: FormResponseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FormResponseFindUniqueArgsSchema: z.ZodType<Prisma.FormResponseFindUniqueArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereUniqueInputSchema,
}).strict() ;

export const FormResponseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FormResponseFindUniqueOrThrowArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereUniqueInputSchema,
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
}).strict() ;

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const ImpostazioniCreateArgsSchema: z.ZodType<Prisma.ImpostazioniCreateArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  data: z.union([ ImpostazioniCreateInputSchema,ImpostazioniUncheckedCreateInputSchema ]),
}).strict() ;

export const ImpostazioniUpsertArgsSchema: z.ZodType<Prisma.ImpostazioniUpsertArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereUniqueInputSchema,
  create: z.union([ ImpostazioniCreateInputSchema,ImpostazioniUncheckedCreateInputSchema ]),
  update: z.union([ ImpostazioniUpdateInputSchema,ImpostazioniUncheckedUpdateInputSchema ]),
}).strict() ;

export const ImpostazioniCreateManyArgsSchema: z.ZodType<Prisma.ImpostazioniCreateManyArgs> = z.object({
  data: z.union([ ImpostazioniCreateManyInputSchema,ImpostazioniCreateManyInputSchema.array() ]),
}).strict() ;

export const ImpostazioniCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ImpostazioniCreateManyAndReturnArgs> = z.object({
  data: z.union([ ImpostazioniCreateManyInputSchema,ImpostazioniCreateManyInputSchema.array() ]),
}).strict() ;

export const ImpostazioniDeleteArgsSchema: z.ZodType<Prisma.ImpostazioniDeleteArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  where: ImpostazioniWhereUniqueInputSchema,
}).strict() ;

export const ImpostazioniUpdateArgsSchema: z.ZodType<Prisma.ImpostazioniUpdateArgs> = z.object({
  select: ImpostazioniSelectSchema.optional(),
  include: ImpostazioniIncludeSchema.optional(),
  data: z.union([ ImpostazioniUpdateInputSchema,ImpostazioniUncheckedUpdateInputSchema ]),
  where: ImpostazioniWhereUniqueInputSchema,
}).strict() ;

export const ImpostazioniUpdateManyArgsSchema: z.ZodType<Prisma.ImpostazioniUpdateManyArgs> = z.object({
  data: z.union([ ImpostazioniUpdateManyMutationInputSchema,ImpostazioniUncheckedUpdateManyInputSchema ]),
  where: ImpostazioniWhereInputSchema.optional(),
}).strict() ;

export const ImpostazioniDeleteManyArgsSchema: z.ZodType<Prisma.ImpostazioniDeleteManyArgs> = z.object({
  where: ImpostazioniWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const VestitoCreateArgsSchema: z.ZodType<Prisma.VestitoCreateArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  data: z.union([ VestitoCreateInputSchema,VestitoUncheckedCreateInputSchema ]),
}).strict() ;

export const VestitoUpsertArgsSchema: z.ZodType<Prisma.VestitoUpsertArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereUniqueInputSchema,
  create: z.union([ VestitoCreateInputSchema,VestitoUncheckedCreateInputSchema ]),
  update: z.union([ VestitoUpdateInputSchema,VestitoUncheckedUpdateInputSchema ]),
}).strict() ;

export const VestitoCreateManyArgsSchema: z.ZodType<Prisma.VestitoCreateManyArgs> = z.object({
  data: z.union([ VestitoCreateManyInputSchema,VestitoCreateManyInputSchema.array() ]),
}).strict() ;

export const VestitoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VestitoCreateManyAndReturnArgs> = z.object({
  data: z.union([ VestitoCreateManyInputSchema,VestitoCreateManyInputSchema.array() ]),
}).strict() ;

export const VestitoDeleteArgsSchema: z.ZodType<Prisma.VestitoDeleteArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  where: VestitoWhereUniqueInputSchema,
}).strict() ;

export const VestitoUpdateArgsSchema: z.ZodType<Prisma.VestitoUpdateArgs> = z.object({
  select: VestitoSelectSchema.optional(),
  include: VestitoIncludeSchema.optional(),
  data: z.union([ VestitoUpdateInputSchema,VestitoUncheckedUpdateInputSchema ]),
  where: VestitoWhereUniqueInputSchema,
}).strict() ;

export const VestitoUpdateManyArgsSchema: z.ZodType<Prisma.VestitoUpdateManyArgs> = z.object({
  data: z.union([ VestitoUpdateManyMutationInputSchema,VestitoUncheckedUpdateManyInputSchema ]),
  where: VestitoWhereInputSchema.optional(),
}).strict() ;

export const VestitoDeleteManyArgsSchema: z.ZodType<Prisma.VestitoDeleteManyArgs> = z.object({
  where: VestitoWhereInputSchema.optional(),
}).strict() ;

export const CollaboratorCreateArgsSchema: z.ZodType<Prisma.CollaboratorCreateArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  data: z.union([ CollaboratorCreateInputSchema,CollaboratorUncheckedCreateInputSchema ]),
}).strict() ;

export const CollaboratorUpsertArgsSchema: z.ZodType<Prisma.CollaboratorUpsertArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereUniqueInputSchema,
  create: z.union([ CollaboratorCreateInputSchema,CollaboratorUncheckedCreateInputSchema ]),
  update: z.union([ CollaboratorUpdateInputSchema,CollaboratorUncheckedUpdateInputSchema ]),
}).strict() ;

export const CollaboratorCreateManyArgsSchema: z.ZodType<Prisma.CollaboratorCreateManyArgs> = z.object({
  data: z.union([ CollaboratorCreateManyInputSchema,CollaboratorCreateManyInputSchema.array() ]),
}).strict() ;

export const CollaboratorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CollaboratorCreateManyAndReturnArgs> = z.object({
  data: z.union([ CollaboratorCreateManyInputSchema,CollaboratorCreateManyInputSchema.array() ]),
}).strict() ;

export const CollaboratorDeleteArgsSchema: z.ZodType<Prisma.CollaboratorDeleteArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  where: CollaboratorWhereUniqueInputSchema,
}).strict() ;

export const CollaboratorUpdateArgsSchema: z.ZodType<Prisma.CollaboratorUpdateArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: CollaboratorIncludeSchema.optional(),
  data: z.union([ CollaboratorUpdateInputSchema,CollaboratorUncheckedUpdateInputSchema ]),
  where: CollaboratorWhereUniqueInputSchema,
}).strict() ;

export const CollaboratorUpdateManyArgsSchema: z.ZodType<Prisma.CollaboratorUpdateManyArgs> = z.object({
  data: z.union([ CollaboratorUpdateManyMutationInputSchema,CollaboratorUncheckedUpdateManyInputSchema ]),
  where: CollaboratorWhereInputSchema.optional(),
}).strict() ;

export const CollaboratorDeleteManyArgsSchema: z.ZodType<Prisma.CollaboratorDeleteManyArgs> = z.object({
  where: CollaboratorWhereInputSchema.optional(),
}).strict() ;

export const TessutoCreateArgsSchema: z.ZodType<Prisma.TessutoCreateArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  data: z.union([ TessutoCreateInputSchema,TessutoUncheckedCreateInputSchema ]),
}).strict() ;

export const TessutoUpsertArgsSchema: z.ZodType<Prisma.TessutoUpsertArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereUniqueInputSchema,
  create: z.union([ TessutoCreateInputSchema,TessutoUncheckedCreateInputSchema ]),
  update: z.union([ TessutoUpdateInputSchema,TessutoUncheckedUpdateInputSchema ]),
}).strict() ;

export const TessutoCreateManyArgsSchema: z.ZodType<Prisma.TessutoCreateManyArgs> = z.object({
  data: z.union([ TessutoCreateManyInputSchema,TessutoCreateManyInputSchema.array() ]),
}).strict() ;

export const TessutoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TessutoCreateManyAndReturnArgs> = z.object({
  data: z.union([ TessutoCreateManyInputSchema,TessutoCreateManyInputSchema.array() ]),
}).strict() ;

export const TessutoDeleteArgsSchema: z.ZodType<Prisma.TessutoDeleteArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  where: TessutoWhereUniqueInputSchema,
}).strict() ;

export const TessutoUpdateArgsSchema: z.ZodType<Prisma.TessutoUpdateArgs> = z.object({
  select: TessutoSelectSchema.optional(),
  include: TessutoIncludeSchema.optional(),
  data: z.union([ TessutoUpdateInputSchema,TessutoUncheckedUpdateInputSchema ]),
  where: TessutoWhereUniqueInputSchema,
}).strict() ;

export const TessutoUpdateManyArgsSchema: z.ZodType<Prisma.TessutoUpdateManyArgs> = z.object({
  data: z.union([ TessutoUpdateManyMutationInputSchema,TessutoUncheckedUpdateManyInputSchema ]),
  where: TessutoWhereInputSchema.optional(),
}).strict() ;

export const TessutoDeleteManyArgsSchema: z.ZodType<Prisma.TessutoDeleteManyArgs> = z.object({
  where: TessutoWhereInputSchema.optional(),
}).strict() ;

export const TramaCreateArgsSchema: z.ZodType<Prisma.TramaCreateArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  data: z.union([ TramaCreateInputSchema,TramaUncheckedCreateInputSchema ]),
}).strict() ;

export const TramaUpsertArgsSchema: z.ZodType<Prisma.TramaUpsertArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereUniqueInputSchema,
  create: z.union([ TramaCreateInputSchema,TramaUncheckedCreateInputSchema ]),
  update: z.union([ TramaUpdateInputSchema,TramaUncheckedUpdateInputSchema ]),
}).strict() ;

export const TramaCreateManyArgsSchema: z.ZodType<Prisma.TramaCreateManyArgs> = z.object({
  data: z.union([ TramaCreateManyInputSchema,TramaCreateManyInputSchema.array() ]),
}).strict() ;

export const TramaCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TramaCreateManyAndReturnArgs> = z.object({
  data: z.union([ TramaCreateManyInputSchema,TramaCreateManyInputSchema.array() ]),
}).strict() ;

export const TramaDeleteArgsSchema: z.ZodType<Prisma.TramaDeleteArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  where: TramaWhereUniqueInputSchema,
}).strict() ;

export const TramaUpdateArgsSchema: z.ZodType<Prisma.TramaUpdateArgs> = z.object({
  select: TramaSelectSchema.optional(),
  include: TramaIncludeSchema.optional(),
  data: z.union([ TramaUpdateInputSchema,TramaUncheckedUpdateInputSchema ]),
  where: TramaWhereUniqueInputSchema,
}).strict() ;

export const TramaUpdateManyArgsSchema: z.ZodType<Prisma.TramaUpdateManyArgs> = z.object({
  data: z.union([ TramaUpdateManyMutationInputSchema,TramaUncheckedUpdateManyInputSchema ]),
  where: TramaWhereInputSchema.optional(),
}).strict() ;

export const TramaDeleteManyArgsSchema: z.ZodType<Prisma.TramaDeleteManyArgs> = z.object({
  where: TramaWhereInputSchema.optional(),
}).strict() ;

export const FiloCreateArgsSchema: z.ZodType<Prisma.FiloCreateArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  data: z.union([ FiloCreateInputSchema,FiloUncheckedCreateInputSchema ]),
}).strict() ;

export const FiloUpsertArgsSchema: z.ZodType<Prisma.FiloUpsertArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereUniqueInputSchema,
  create: z.union([ FiloCreateInputSchema,FiloUncheckedCreateInputSchema ]),
  update: z.union([ FiloUpdateInputSchema,FiloUncheckedUpdateInputSchema ]),
}).strict() ;

export const FiloCreateManyArgsSchema: z.ZodType<Prisma.FiloCreateManyArgs> = z.object({
  data: z.union([ FiloCreateManyInputSchema,FiloCreateManyInputSchema.array() ]),
}).strict() ;

export const FiloCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FiloCreateManyAndReturnArgs> = z.object({
  data: z.union([ FiloCreateManyInputSchema,FiloCreateManyInputSchema.array() ]),
}).strict() ;

export const FiloDeleteArgsSchema: z.ZodType<Prisma.FiloDeleteArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  where: FiloWhereUniqueInputSchema,
}).strict() ;

export const FiloUpdateArgsSchema: z.ZodType<Prisma.FiloUpdateArgs> = z.object({
  select: FiloSelectSchema.optional(),
  include: FiloIncludeSchema.optional(),
  data: z.union([ FiloUpdateInputSchema,FiloUncheckedUpdateInputSchema ]),
  where: FiloWhereUniqueInputSchema,
}).strict() ;

export const FiloUpdateManyArgsSchema: z.ZodType<Prisma.FiloUpdateManyArgs> = z.object({
  data: z.union([ FiloUpdateManyMutationInputSchema,FiloUncheckedUpdateManyInputSchema ]),
  where: FiloWhereInputSchema.optional(),
}).strict() ;

export const FiloDeleteManyArgsSchema: z.ZodType<Prisma.FiloDeleteManyArgs> = z.object({
  where: FiloWhereInputSchema.optional(),
}).strict() ;

export const FibraCreateArgsSchema: z.ZodType<Prisma.FibraCreateArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  data: z.union([ FibraCreateInputSchema,FibraUncheckedCreateInputSchema ]),
}).strict() ;

export const FibraUpsertArgsSchema: z.ZodType<Prisma.FibraUpsertArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereUniqueInputSchema,
  create: z.union([ FibraCreateInputSchema,FibraUncheckedCreateInputSchema ]),
  update: z.union([ FibraUpdateInputSchema,FibraUncheckedUpdateInputSchema ]),
}).strict() ;

export const FibraCreateManyArgsSchema: z.ZodType<Prisma.FibraCreateManyArgs> = z.object({
  data: z.union([ FibraCreateManyInputSchema,FibraCreateManyInputSchema.array() ]),
}).strict() ;

export const FibraCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FibraCreateManyAndReturnArgs> = z.object({
  data: z.union([ FibraCreateManyInputSchema,FibraCreateManyInputSchema.array() ]),
}).strict() ;

export const FibraDeleteArgsSchema: z.ZodType<Prisma.FibraDeleteArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  where: FibraWhereUniqueInputSchema,
}).strict() ;

export const FibraUpdateArgsSchema: z.ZodType<Prisma.FibraUpdateArgs> = z.object({
  select: FibraSelectSchema.optional(),
  include: FibraIncludeSchema.optional(),
  data: z.union([ FibraUpdateInputSchema,FibraUncheckedUpdateInputSchema ]),
  where: FibraWhereUniqueInputSchema,
}).strict() ;

export const FibraUpdateManyArgsSchema: z.ZodType<Prisma.FibraUpdateManyArgs> = z.object({
  data: z.union([ FibraUpdateManyMutationInputSchema,FibraUncheckedUpdateManyInputSchema ]),
  where: FibraWhereInputSchema.optional(),
}).strict() ;

export const FibraDeleteManyArgsSchema: z.ZodType<Prisma.FibraDeleteManyArgs> = z.object({
  where: FibraWhereInputSchema.optional(),
}).strict() ;

export const NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationCreateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationUpsertArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
  create: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
  update: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationCreateManyArgsSchema: z.ZodType<Prisma.NotificationCreateManyArgs> = z.object({
  data: z.union([ NotificationCreateManyInputSchema,NotificationCreateManyInputSchema.array() ]),
}).strict() ;

export const NotificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NotificationCreateManyAndReturnArgs> = z.object({
  data: z.union([ NotificationCreateManyInputSchema,NotificationCreateManyInputSchema.array() ]),
}).strict() ;

export const NotificationDeleteArgsSchema: z.ZodType<Prisma.NotificationDeleteArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateArgsSchema: z.ZodType<Prisma.NotificationUpdateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateManyArgsSchema: z.ZodType<Prisma.NotificationUpdateManyArgs> = z.object({
  data: z.union([ NotificationUpdateManyMutationInputSchema,NotificationUncheckedUpdateManyInputSchema ]),
  where: NotificationWhereInputSchema.optional(),
}).strict() ;

export const NotificationDeleteManyArgsSchema: z.ZodType<Prisma.NotificationDeleteManyArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
}).strict() ;

export const MediaCreateArgsSchema: z.ZodType<Prisma.MediaCreateArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  data: z.union([ MediaCreateInputSchema,MediaUncheckedCreateInputSchema ]),
}).strict() ;

export const MediaUpsertArgsSchema: z.ZodType<Prisma.MediaUpsertArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
  create: z.union([ MediaCreateInputSchema,MediaUncheckedCreateInputSchema ]),
  update: z.union([ MediaUpdateInputSchema,MediaUncheckedUpdateInputSchema ]),
}).strict() ;

export const MediaCreateManyArgsSchema: z.ZodType<Prisma.MediaCreateManyArgs> = z.object({
  data: z.union([ MediaCreateManyInputSchema,MediaCreateManyInputSchema.array() ]),
}).strict() ;

export const MediaCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MediaCreateManyAndReturnArgs> = z.object({
  data: z.union([ MediaCreateManyInputSchema,MediaCreateManyInputSchema.array() ]),
}).strict() ;

export const MediaDeleteArgsSchema: z.ZodType<Prisma.MediaDeleteArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  where: MediaWhereUniqueInputSchema,
}).strict() ;

export const MediaUpdateArgsSchema: z.ZodType<Prisma.MediaUpdateArgs> = z.object({
  select: MediaSelectSchema.optional(),
  include: MediaIncludeSchema.optional(),
  data: z.union([ MediaUpdateInputSchema,MediaUncheckedUpdateInputSchema ]),
  where: MediaWhereUniqueInputSchema,
}).strict() ;

export const MediaUpdateManyArgsSchema: z.ZodType<Prisma.MediaUpdateManyArgs> = z.object({
  data: z.union([ MediaUpdateManyMutationInputSchema,MediaUncheckedUpdateManyInputSchema ]),
  where: MediaWhereInputSchema.optional(),
}).strict() ;

export const MediaDeleteManyArgsSchema: z.ZodType<Prisma.MediaDeleteManyArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
}).strict() ;

export const VoteCreateArgsSchema: z.ZodType<Prisma.VoteCreateArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  data: z.union([ VoteCreateInputSchema,VoteUncheckedCreateInputSchema ]),
}).strict() ;

export const VoteUpsertArgsSchema: z.ZodType<Prisma.VoteUpsertArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereUniqueInputSchema,
  create: z.union([ VoteCreateInputSchema,VoteUncheckedCreateInputSchema ]),
  update: z.union([ VoteUpdateInputSchema,VoteUncheckedUpdateInputSchema ]),
}).strict() ;

export const VoteCreateManyArgsSchema: z.ZodType<Prisma.VoteCreateManyArgs> = z.object({
  data: z.union([ VoteCreateManyInputSchema,VoteCreateManyInputSchema.array() ]),
}).strict() ;

export const VoteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VoteCreateManyAndReturnArgs> = z.object({
  data: z.union([ VoteCreateManyInputSchema,VoteCreateManyInputSchema.array() ]),
}).strict() ;

export const VoteDeleteArgsSchema: z.ZodType<Prisma.VoteDeleteArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  where: VoteWhereUniqueInputSchema,
}).strict() ;

export const VoteUpdateArgsSchema: z.ZodType<Prisma.VoteUpdateArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: VoteIncludeSchema.optional(),
  data: z.union([ VoteUpdateInputSchema,VoteUncheckedUpdateInputSchema ]),
  where: VoteWhereUniqueInputSchema,
}).strict() ;

export const VoteUpdateManyArgsSchema: z.ZodType<Prisma.VoteUpdateManyArgs> = z.object({
  data: z.union([ VoteUpdateManyMutationInputSchema,VoteUncheckedUpdateManyInputSchema ]),
  where: VoteWhereInputSchema.optional(),
}).strict() ;

export const VoteDeleteManyArgsSchema: z.ZodType<Prisma.VoteDeleteManyArgs> = z.object({
  where: VoteWhereInputSchema.optional(),
}).strict() ;

export const FormResponseCreateArgsSchema: z.ZodType<Prisma.FormResponseCreateArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  data: z.union([ FormResponseCreateInputSchema,FormResponseUncheckedCreateInputSchema ]),
}).strict() ;

export const FormResponseUpsertArgsSchema: z.ZodType<Prisma.FormResponseUpsertArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereUniqueInputSchema,
  create: z.union([ FormResponseCreateInputSchema,FormResponseUncheckedCreateInputSchema ]),
  update: z.union([ FormResponseUpdateInputSchema,FormResponseUncheckedUpdateInputSchema ]),
}).strict() ;

export const FormResponseCreateManyArgsSchema: z.ZodType<Prisma.FormResponseCreateManyArgs> = z.object({
  data: z.union([ FormResponseCreateManyInputSchema,FormResponseCreateManyInputSchema.array() ]),
}).strict() ;

export const FormResponseCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FormResponseCreateManyAndReturnArgs> = z.object({
  data: z.union([ FormResponseCreateManyInputSchema,FormResponseCreateManyInputSchema.array() ]),
}).strict() ;

export const FormResponseDeleteArgsSchema: z.ZodType<Prisma.FormResponseDeleteArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  where: FormResponseWhereUniqueInputSchema,
}).strict() ;

export const FormResponseUpdateArgsSchema: z.ZodType<Prisma.FormResponseUpdateArgs> = z.object({
  select: FormResponseSelectSchema.optional(),
  include: FormResponseIncludeSchema.optional(),
  data: z.union([ FormResponseUpdateInputSchema,FormResponseUncheckedUpdateInputSchema ]),
  where: FormResponseWhereUniqueInputSchema,
}).strict() ;

export const FormResponseUpdateManyArgsSchema: z.ZodType<Prisma.FormResponseUpdateManyArgs> = z.object({
  data: z.union([ FormResponseUpdateManyMutationInputSchema,FormResponseUncheckedUpdateManyInputSchema ]),
  where: FormResponseWhereInputSchema.optional(),
}).strict() ;

export const FormResponseDeleteManyArgsSchema: z.ZodType<Prisma.FormResponseDeleteManyArgs> = z.object({
  where: FormResponseWhereInputSchema.optional(),
}).strict() ;